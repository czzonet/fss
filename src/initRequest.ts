import { DIR_SERVE, PORT } from "./config";
import { Express } from "express";

export const initRequest = (app: Express) => {
  app.get("/", (req, res) => {
    res.send("Express running." + PORT + DIR_SERVE);
  });

  app.post("/", (req, res) => {
    console.log(req.body);

    res.send("Express running." + PORT + DIR_SERVE);
  });
};
