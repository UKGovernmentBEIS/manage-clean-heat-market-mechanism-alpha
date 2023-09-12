resource "aws_db_subnet_group" "db_subnet_group" {
  name = "${var.prefix}-subnet-group"
  description = "Subnet group for ${var.prefix}"
  subnet_ids = var.subnet_ids
}

# Create the RDS PostgreSQL instance
resource "aws_db_instance" "postgres" {
  apply_immediately           = true
  allocated_storage           = 20
  auto_minor_version_upgrade  = false      
  backup_retention_period     = 0
  db_name                     = var.db_name
  engine                      = "postgres"
  engine_version              = "15.3"
  identifier                  = "${var.prefix}-mcs"
  instance_class              = "db.t3.micro"
  multi_az                    = false
  username                    = var.db_username
  password                    = var.db_password
  publicly_accessible         = false
  storage_encrypted           = true
  skip_final_snapshot         = true
  db_subnet_group_name        = aws_db_subnet_group.db_subnet_group.id
  vpc_security_group_ids      = var.security_group_ids
  max_allocated_storage       = 1000

  tags = {
    Name = "${var.prefix}-mcs"
  }
}