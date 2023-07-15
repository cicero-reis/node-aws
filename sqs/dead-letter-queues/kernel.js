import cron from "node-cron";
import processar from "./dlq-message.js";

cron.schedule("*/5 * * * * *", () => {
  console.log("DLQ Looking for messages!    ");
  processar();
});
