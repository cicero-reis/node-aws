import cron from "node-cron";
import processar from "./receive-message.js";

cron.schedule("*/5 * * * * *", () => {
  console.log("Looking for messages!    ");
  processar();
});
