import { SQS, QUEUE_URL } from "./config.js";

const sqsClient = (body) => {
  let data = {
    vehicleModel: body.vehicleModel,
    withdrawalDateAndTime: body.withdrawalDateAndTime,
    returnDateAndTime: body.returnDateAndTime,
  };

  let sqsPayload = {
    DelaySeconds: 10,
    MessageAttributes: {
      vehicleModel: {
        DataType: "String",
        StringValue: data.vehicleModel,
      },
      withdrawalDateAndTime: {
        DataType: "String",
        StringValue: data.withdrawalDateAndTime,
      },
      returnDateAndTime: {
        DataType: "String",
        StringValue: data.returnDateAndTime,
      },
    },
    MessageBody: JSON.stringify(data),
    QueueUrl: QUEUE_URL,
  };

  return SQS.sendMessage(sqsPayload).promise();
};

export default sqsClient;
