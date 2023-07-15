import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

const SQS = new AWS.SQS({ apiVersion: "2012-11-05" });

const QUEUE_URL = "http://localhost:4566/000000000000/contract-message";

export { SQS, QUEUE_URL };
