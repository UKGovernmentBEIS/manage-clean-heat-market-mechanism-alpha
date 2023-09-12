variable "prefix" {
  description = "The prefix used for all resources"
}
variable "region" {
  description = "The AWS region to build resources in"
}
variable "vpc_id" {
  description = "The Id of the VPC to build the database in"
}
variable "security_group_ids" {
  type    = any
  default = []
  description = "The Ids of the security groups to associate the database with"
}
variable "subnet_ids" {
  type    = any
  default = []
  description = "The Ids of the subnets to associate the database to"
}
variable "db_name" {
	description = "The databse name"
}
variable "db_username" {
	description = "The database username"
}

variable "db_password" {
	description = "The database password"
}