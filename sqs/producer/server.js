import express from "express";
import cors from "cors";
import sqsClient from "./sqs-sendmessage.js";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/send-message", async (req, res) => {
  await sqsClient(req.body)
    .then((data) => {
      console.log(data.MessageId);
      res.status(200).json({
        status: "success",
        message: "Mensagem enviada com sucesso",
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(err.statusCode).json({
        status: "error",
        message: "Ops! Algo deu muito errado",
        error: err,
      });
    });
});

app.listen(3000, () => console.log("Servidor executando na porta 3000"));
