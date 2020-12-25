import express from "express";
import bodyParser from "body-parser";
import { DIR_SERVE, PORT } from "./config";

main();

function main() {
  runApp();
}

function runApp() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    console.log(new Date().toLocaleString(), req.url);
    next();
  });

  app.get("/", (req, res) => {
    res.send("Express running." + PORT + DIR_SERVE);
  });

  app.post("/", (req, res) => {
    console.log(req.body);

    res.send("Express running." + PORT + DIR_SERVE);
  });

  app.use(express.static(DIR_SERVE));

  app.listen(PORT, () => {
    console.log("Express running." + PORT + DIR_SERVE);
  });
}
