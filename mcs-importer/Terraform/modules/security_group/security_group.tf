# Create a security group to allow incoming traffic to the RDS instance
resource "aws_default_security_group" "default_security_group" {
  #name = "${var.prefix}-rds-sg"
  vpc_id = var.vpc_id

  # Add the rules to allow incoming traffic from specific sources
  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "${var.prefix}-rds-sg"
  }
}