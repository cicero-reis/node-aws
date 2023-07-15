#!/bin/bash

aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/000000000000/contract-message --message-body 'TEST 01'
aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/000000000000/contract-message --message-body 'TEST 02'
aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/000000000000/contract-message --message-body 'TEST 02'
