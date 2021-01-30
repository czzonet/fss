import express from "express";
import bodyParser from "body-parser";
import { DIR_SERVE, PORT } from "./config";
import { address } from "ip";
import { networkInterfaces } from "os";
import { compose } from "./fp";
import { ipv4StringArray } from "./ips";

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
    console.log("[I] Express running.");

    console.log("[I] Dir:", DIR_SERVE);

    const ips = ipv4StringArray();
    const links = ips.map((d) => `http://${d}:${PORT}`).join("\n");

    console.log("[I] Listen at:");
    console.log(links);
  });
}
