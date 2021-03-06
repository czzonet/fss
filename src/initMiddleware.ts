import express, { Express } from "express";
import { urlencoded, json } from "body-parser";
import { DIR_SERVE, PORT } from "./config";

export const initMiddleware = (app: Express) => {
  app.use(urlencoded({ extended: false }));
  app.use(json());

  app.use((req, res, next) => {
    console.log(new Date().toLocaleString(), req.url);
    next();
  });

  app.use(express.static(DIR_SERVE));
};
