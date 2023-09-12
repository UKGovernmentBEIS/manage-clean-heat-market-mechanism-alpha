data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
    
    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "lambda_iam" {
  name               = "${var.prefix}-iam"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution_role_policy_attachment" {
  role       = "${aws_iam_role.lambda_iam.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "lambda_vpc_access_execution_role_policy_attachment" {
  role       = "${aws_iam_role.lambda_iam.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}

resource "aws_lambda_function" "lambda_function" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "lambda_function_payload.zip"
  function_name = "${var.prefix}-lambda"
  role          = aws_iam_role.lambda_iam.arn
  handler       = "CHMM.DataImport.Lambda::CHMM.DataImport.Lambda.Function_FunctionHandler_Generated::FunctionHandler"
  timeout       = 30
  runtime = "dotnet6"
  memory_size = 128

  vpc_config {
    subnet_ids = var.subnet_ids
    security_group_ids = var.security_group_ids
  }

  environment {
    variables = {
      DB_INSTANCE_ADDRESS = var.db_address
      DB_INSTANCE_USERNAME = var.db_username
      DB_INSTANCE_PASSWORD = var.db_password
      DB_INSTANCE_NAME = var.db_name
    }
  }

  tags = {
    Name = "${var.prefix}-lambda"
    AWSServerlessAppNETCore = "true"
    "lambda:createdBy" = "SAM"
  }
}