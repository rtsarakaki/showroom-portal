resource "aws_dynamodb_table" "table" {
	name = var.dynamodb_table_name
	billing_mode = "PROVISIONED"
	read_capacity = 5
	write_capacity = 5
	hash_key = "pk"
	range_key = "sk"
	attribute {
    	name = "pk"
    	type = "S"
	}

  attribute {
    name = "sk"
    type = "S"
  }
	tags = {
	  	Name = "poc-aws"
		Environment = var.environment
	}

}