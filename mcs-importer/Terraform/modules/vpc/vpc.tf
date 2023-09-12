# Create a new VPC
resource "aws_vpc" "main" {
  cidr_block = "172.60.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support = true

  tags = {
    Name = "${var.prefix}-vpc"
  }
}

# Internet Gateway and it's connection to the VPC subnets via a public route table
# Create public subnets
resource "aws_subnet" "public_subnet_1" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "172.60.0.0/20"
  availability_zone = "${var.region}a"

  tags = {
    Name = "${var.prefix}-public-subnet-1a"
  }
}
resource "aws_subnet" "public_subnet_2" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "172.60.16.0/20"
  availability_zone = "${var.region}b"

  tags = {
    Name = "${var.prefix}-public-subnet-2b"
  }
}

# Create an internet gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "${var.prefix}-igw"
  }
}

# Create a default route table and associate it with the public subnet
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "${var.prefix}-rtb-public"
  }
}

resource "aws_route_table_association" "public_subnet_1_association" {
  subnet_id      = aws_subnet.public_subnet_1.id
  route_table_id = aws_route_table.public_route_table.id
}

resource "aws_route_table_association" "public_subnet_2_association" {
  subnet_id      = aws_subnet.public_subnet_2.id
  route_table_id = aws_route_table.public_route_table.id
}

# Private network connection 1 and it's connection to the VPC subnet via a priavte route table.
# Create private subnet
resource "aws_subnet" "private_subnet_1" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "172.60.128.0/20"
  availability_zone = "${var.region}a"
  map_public_ip_on_launch = false

  tags = {
    Name = "${var.prefix}-private-subnet-1a"
  }
}

# Create Elastic IP address
resource "aws_eip" "public_eip_1" {
  domain   = "vpc"
  network_border_group = var.region

  tags = {
    Name = "${var.prefix}-eip-1"
  }
}

# Crete public nat gateways
resource "aws_nat_gateway" "public_nat_gateway_1" {
  allocation_id = aws_eip.public_eip_1.id
  subnet_id     = aws_subnet.public_subnet_1.id #private_subnet_1.id
  connectivity_type = "public"
  secondary_allocation_ids = []

  tags = {
    Name = "${var.prefix}-nat-public-1"
  }
}

# Create a private route table and associate it with the private subnet
resource "aws_route_table" "private_route_table_1" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_nat_gateway.public_nat_gateway_1.id
  }

  tags = {
    Name = "${var.prefix}-rtb-private-1"
  }
}

resource "aws_route_table_association" "private_subnet_1_association" {
  subnet_id      = aws_subnet.private_subnet_1.id
  route_table_id = aws_route_table.private_route_table_1.id
}

# Private network connection 2 and it's connection to the VPC subnet via a priavte route table.
# Create private subnet
resource "aws_subnet" "private_subnet_2" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "172.60.144.0/20"
  availability_zone = "${var.region}b"
  map_public_ip_on_launch = false

  tags = {
    Name = "${var.prefix}-private-subnet-2b"
  }
}

# Create Elastic IP address
resource "aws_eip" "public_eip_2" {
  domain   = "vpc"
  network_border_group = var.region

  tags = {
    Name = "${var.prefix}-eip-2"
  }
}

# Crete public nat gateways
resource "aws_nat_gateway" "public_nat_gateway_2" {
  allocation_id = aws_eip.public_eip_2.id
  subnet_id     = aws_subnet.public_subnet_2.id #private_subnet_2.id
  connectivity_type = "public"
  secondary_allocation_ids = []

  tags = {
    Name = "${var.prefix}-nat-public-2"
  }
}

# Create a private route table and associate it with the private subnet
resource "aws_route_table" "private_route_table_2" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_nat_gateway.public_nat_gateway_2.id
  }

  tags = {
    Name = "${var.prefix}-rtb-private-2"
  }
}

resource "aws_route_table_association" "private_subnet_2_association" {
  subnet_id      = aws_subnet.private_subnet_2.id
  route_table_id = aws_route_table.private_route_table_2.id
}

resource "aws_default_network_acl" "default_network_acl" {
  default_network_acl_id = aws_vpc.main.default_network_acl_id
  subnet_ids             = [aws_subnet.public_subnet_1.id, aws_subnet.public_subnet_2.id, aws_subnet.private_subnet_1.id, aws_subnet.private_subnet_2.id]

  ingress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  egress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  tags = {
    Name = "${var.prefix}-default-network-acl"
  }
}