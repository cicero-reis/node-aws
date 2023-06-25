terraform {
  required_version = "1.2.8"

  required_providers {
    aws = {
      version = "4.29.0"
      source  = "hashicorp/aws"
    }
  }
}
