import express from "express";
import cors from "cors";
import processar from "./receive-message.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/consumer-message", (req, res) => {
  try {
    processar();
    res.status(200).json({
      status: "success",
      data: "Ok",
    });
  } catch (error) {
    console.log("Error");
  }
});

app.listen(5000, () => console.log("Servidor executando na porta 5000"));
