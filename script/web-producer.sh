#!/bin/bash

aws --endpoint-url=http://localhost:4566 s3 sync ./../web-producer/dist s3://vuejs-producer --delete


# https://vuejs-producer.s3-website.localhost.localstack.cloud:4566/#/