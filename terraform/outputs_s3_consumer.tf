output "consumer_arn" {
  description = "ARN of the bucket"
  value       = aws_s3_bucket.s3_bucket_consumer.arn
}

output "consumer_name" {
  description = "Name (id) of the bucket"
  value       = aws_s3_bucket.s3_bucket_consumer.id
}

output "consumer_domain" {
  description = "Domain name of the bucket"
  value       = aws_s3_bucket_website_configuration.s3_bucket_consumer.website_domain
}

output "consumer_website_endpoint" {
  value = aws_s3_bucket_website_configuration.s3_bucket_consumer.website_endpoint
}
