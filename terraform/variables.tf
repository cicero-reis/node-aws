variable "region" {
  description = "Indicates the AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "localstack" {
  description = "Endpoint localstack"
  type        = string
  default     = "http://localhost:4566"
}

variable "access_key" {
  description = "AWS access_key"
  type        = string
  default     = "mock_access_key"
}

variable "secret_key" {
  description = "AWS secret_key"
  type        = string
  default     = "mock_secret_key"
}

variable "s3_localstack" {
  description = "Endpoint localstack"
  type        = string
  default     = "http://s3.localhost.localstack.cloud:4566"
}

variable "bucket_producer" {
  description = "Name of the s3 bucket. Must be unique."
  type        = string
  default     = "vuejs-producer"
}

variable "bucket_consumer" {
  description = "Name of the s3 bucket. Must be unique."
  type        = string
  default     = "vuejs-consumer"
}

variable "sqs_producer_contract_queue" {
  description = "Produce contract messages"
  type        = string
  default     = "contract-message"
}

variable "sqs_producer_contract_queue_dlq" {
  description = "Produce contract messages"
  type        = string
  default     = "contract-message-dlq"
}

variable "tags" {
  description = "Tags to set..."
  type        = map(string)
  default     = {}
}
