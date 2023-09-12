variable "project_id" {
  description = "The Project Id, e.g., desnz-chmm"
}

variable "region" {
  description = "The AWS region for the deployment"
}

variable "service_prefix" {
	description = "The prefix to append to all services"
}

variable "db_username" {
	description = "The database username"
}

variable "db_password" {
	description = "The database password"
}