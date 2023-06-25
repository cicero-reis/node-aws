import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

const SQS = new AWS.SQS({ apiVersion: "2012-11-05" });

export default SQS;
