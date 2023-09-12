### Variables

variable "pgdb-username" {
  default = "chmmpostgres"
}

resource "random_password" "pgdb" {
  length = 16
}

variable "pgdb-secrets" {
  default = {
    "username" = "chmmpostgres"
    "password" = "Jj9PjbtZ8kjhRvxDqWb"
  }
}

# Secrets
resource "aws_secretsmanager_secret" "pgdb" {
  name = "postgresql-database-secret"
}

resource "aws_secretsmanager_secret_version" "pgdb" {
  secret_id     = aws_secretsmanager_secret.pgdb.id
  secret_string = jsonencode(var.pgdb-secrets)
}

### General 

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "> 3.5.0"
    }
  }
}

provider "aws" {
  region = "eu-west-2"
}


### Lambda

data "archive_file" "lambda-zip" {
  type        = "zip"
  source_dir  = "lambda"
  output_path = "lambda.zip"
}

resource "aws_iam_role" "lambda-iam" {
  name = "lambda-iam"
  assume_role_policy = jsonencode({
    "Version" = "2012-10-17"
    "Statement" = {
      "Action" = "sts:AssumeRole"
      "Principal" = {
        "Service" = "lambda.amazonaws.com"
      }
      "Effect" = "Allow"
      "Sid"    = ""
    }
  })
}

resource "aws_lambda_function" "lambda" {
  filename         = "lambda.zip"
  function_name    = "chmm-dataimport-lambda"
  role             = aws_iam_role.lambda-iam.arn
  handler          = "CHMM.DataImport.Lambda::CHMM.DataImport.Lambda.Function_FunctionHandler_Generated::FunctionHandler"
  source_code_hash = data.archive_file.lambda-zip.output_base64sha256
  runtime          = "dotnet6"
  environment {
    variables = {
      DB_INSTANCE_ADDRESS = aws_db_instance.bl-db.address
    }
  }
}

### API

resource "aws_apigatewayv2_api" "lambda-api" {
  name          = "v2-http-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "lambda-stage" {
  api_id      = aws_apigatewayv2_api.lambda-api.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "lambda-integration" {
  api_id               = aws_apigatewayv2_api.lambda-api.id
  integration_type     = "AWS_PROXY"
  integration_method   = "POST"
  integration_uri      = aws_lambda_function.lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_route" "lambda_route" {
  api_id    = aws_apigatewayv2_api.lambda-api.id
  route_key = "GET /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.lambda-integration.id}"
}

resource "aws_lambda_permission" "api-gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.lambda-api.execution_arn}/*/*/*"
}

### RDS
resource "aws_db_instance" "bl-db" {

  db_name                 = "chmmdataimportprototype"
  allocated_storage       = 20 # gigabytes
  backup_retention_period = 7 # in days
  engine                  = "postgres"
  engine_version          = "14.7"
  identifier              = "chmm-prototype-dataimport"
  instance_class          = "db.t3.micro"
  multi_az                = false
  username                = var.pgdb-username
  password                = random_password.pgdb.result
  port                    = 5432
  publicly_accessible     = true
  storage_encrypted       = true
  storage_type            = "gp2"
  skip_final_snapshot     = true
}
