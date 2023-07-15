#!/bin/bash

aws sqs delete-message \
--endpoint-url=http://localhost:4566 \
--queue-url http://localhost:4566/000000000000/contract-message-dd \
--receipt-handle="OTlhMzMwZWQtYTVmNi00MTUyLWFlZDQtYjJmOWU3MjcxNWYzIGFybjphd3M6c3FzOnVzLWVhc3QtMTowMDAwMDAwMDAwMDA6Y29udHJhY3QtbWVzc2FnZS1kZGwgMTI1NTkxODctMTY2YS00NmNhLWIyOWYtOTRjZWIwNWI5M2Y3IDE2ODk0MjIwNDMuODk1NDM0OQ=="