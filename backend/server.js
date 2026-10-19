import dotenv from "dotenv";
import app from "./app.js";
import ConnectDB from "./config/db.js";
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;
(() => {
  try {
    ConnectDB();
    app.listen(PORT, () => {
      console.log("server connected running on ",PORT);
    });
  } catch (error) {
    console.log("Cant connect to server");
  }
})();
