import express from "express";
import cors from "cors";
import { SQS, QUEUE_URL } from "./config.js";

const app = express();

app.use(cors());

app.use(express.json());

const send = async (body) => {
  return await SQS.sendMessage({
    MessageBody: JSON.stringify(body),
    QueueUrl: QUEUE_URL,
  });
};

app.post("/send-message", async (req, res) => {
  (await send(req.body))
    .promise()
    .then((data) => {
      res.status(200).json({
        status: "success",
        data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        error: error.message,
      });
    });
});

app.listen(3000, () => console.log("Servidor executando na porta 3000"));
