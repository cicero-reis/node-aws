#!/bin/bash

#aws --endpoint-url=http://localhost:4566 s3 cp ./../../web/index.html s3://app-message
#aws --endpoint-url=http://localhost:4566 s3 cp ./../../web-message/dist s3://bucketappmessage
aws --endpoint-url=http://localhost:4566 s3 sync ./../../web-message/dist s3://bucketappmessage --delete