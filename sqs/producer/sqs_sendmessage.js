import { SQS, QUEUE_URL } from "./config.js";

const sqsClient = (body) => {
  let orderData = {
    message: body.message,
  };

  let sqsPayload = {
    DelaySeconds: 10,
    MessageAttributes: {
      message: {
        DataType: "String",
        StringValue: orderData.message,
      },
    },
    MessageBody: JSON.stringify(orderData),
    QueueUrl: QUEUE_URL,
  };

  return SQS.sendMessage(sqsPayload).promise();
};

export default sqsClient;
