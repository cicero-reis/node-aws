import { SQS, QUEUE_URL } from "./config.js";

const processar = async () => {
  const messages = await SQS.receiveMessage({
    MaxNumberOfMessages: 5,
    QueueUrl: QUEUE_URL,
    WaitTimeSeconds: 20,
  }).promise();

  if (messages.Messages) {
    messages.Messages.forEach(async (message) => {
      try {
        const body = JSON.parse(message.Body);
        console.log("processing message...");
        console.log(body);
        await SQS.deleteMessage({
          QueueUrl: QUEUE_URL,
          ReceiptHandle: message.ReceiptHandle,
        }).promise();
        console.log("Message processed (and deleted) successfully!");
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default processar;
