output "producer_arn" {
  description = "ARN of the bucket"
  value       = aws_s3_bucket.s3_bucket_producer.arn
}

output "producer_name" {
  description = "Name (id) of the bucket"
  value       = aws_s3_bucket.s3_bucket_producer.id
}

output "producer_domain" {
  description = "Domain name of the bucket"
  value       = aws_s3_bucket_website_configuration.s3_bucket_producer.website_domain
}

output "producer_website_endpoint" {
  value = aws_s3_bucket_website_configuration.s3_bucket_producer.website_endpoint
}
