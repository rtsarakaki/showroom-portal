resource "aws_s3_bucket" "bucket" {
	bucket = var.s3_bucket_name
  block_public_acls = true
	block_public_policy = true
  ignore_public_acls = true
  restrict_public_buckets = true
}
