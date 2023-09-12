# Configure the AWS provider
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "> 3.5.0"
    }
  }

  required_version = ">= 1.1.0"
}

provider "aws" {
  region = var.region
}


module "vpc" {
  source    = "./modules/vpc"
  prefix    = var.service_prefix
  region    = var.region
}

module "security_group" {
  source    = "./modules/security_group"
  prefix    = var.service_prefix
  vpc_id  = module.vpc.vpc_id
}

module "rds" {
    source  = "./modules/rds"
    prefix  = var.service_prefix
    region  = var.region
    vpc_id  = module.vpc.vpc_id
    security_group_ids = module.security_group.security_group_ids
    subnet_ids = [
        module.vpc.public_subnet_1_id,
        module.vpc.public_subnet_2_id,
        module.vpc.private_subnet_1_id,
        module.vpc.private_subnet_2_id
    ]
    db_name = replace("${var.service_prefix}-mcs", "-", "")
    db_username = var.db_username
    db_password = var.db_password
}

module "lambda" {
    source = "./modules/lambda"
    prefix  = var.service_prefix
    region  = var.region
    vpc_id  = module.vpc.vpc_id
    db_name = replace("${var.service_prefix}-mcs", "-", "")
    db_address = module.rds.db_address
    db_username = var.db_username
    db_password = var.db_password
    subnet_ids = [
        module.vpc.private_subnet_1_id,
        module.vpc.private_subnet_2_id
    ]
    security_group_ids = module.security_group.security_group_ids
}