resource "aws_s3_bucket" "s3_bucket_consumer" {
  bucket = var.bucket_consumer
  tags   = var.tags
}

resource "aws_s3_bucket_website_configuration" "s3_bucket_consumer" {
  bucket = aws_s3_bucket.s3_bucket_consumer.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

}

resource "aws_s3_bucket_policy" "consumer_public_read_access" {
  bucket = aws_s3_bucket.s3_bucket_consumer.id
  policy = data.aws_iam_policy_document.consumer_public_read_access.json
}

data "aws_iam_policy_document" "consumer_public_read_access" {
  version = "2012-10-17"
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    sid    = "PublicReadGetObject"
    effect = "Allow"
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:ListBucket",
      "s3:DeleteObject",
      "s3:GetBucketPolicy"
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_consumer}",
      "arn:aws:s3:::${var.bucket_consumer}/*"
    ]
  }
}

resource "aws_s3_object" "consumer_object_www" {
  depends_on   = [aws_s3_bucket.s3_bucket_consumer]
  for_each     = fileset("${path.root}", "www/*.html")
  bucket       = var.bucket_consumer
  key          = basename(each.value)
  source       = each.value
  etag         = filemd5("${each.value}")
  content_type = "text/html"
  acl          = "public-read"
}
