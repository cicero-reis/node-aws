import SQS from "./config.js";

const processar = () => {
  SQS.receiveMessage(
    {
      MaxNumberOfMessages: 5,
      QueueUrl: "http://localhost:4566/000000000000/sqs-message",
      WaitTimeSeconds: 10,
    },
    (error, data) => {
      if (error) {
        console.log("Erro ao consumir mensagem");
        return;
      }

      if (data.Messages) {
        console.log(`Mensagem ${data.Messages.length}`);

        data.Messages.map((item) => {
          console.log(item.Body);

          SQS.deleteMessage(
            {
              QueueUrl: "http://localhost:4566/000000000000/sqs-message",
              ReceiptHandle: item.ReceiptHandle,
            },
            (error, data) => {
              if (error) {
                console.log(`Error: ${error}`);
                return;
              }

              if (data) {
                console.log("Mensagem deletada");
                return;
              }

              console.log("Nenhuma mensagem para ser deletada");
            }
          );
        });

        return;
      }

      console.log("Não exite mensagem");
    }
  );
};

export default processar;
