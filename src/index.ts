import http from "http";
import express from "express";
import getPort from "get-port";
import chalk from "chalk";
import logSymbols from "log-symbols";
import { DIR_SERVE, PORT } from "./config";
import { ipv4StringArray } from "./ips";
import { initMiddleware } from "./initMiddleware";
import { initRequest } from "./initRequest";

const HOST = "127.0.0.1";
const PORTS = [5544, 8080, 3000];

const start = async () => {
  const port = await getPort({ port: PORTS });
  const address = `http://${HOST}:${port}`;

  const app = express();

  initMiddleware(app);
  initRequest(app);

  app.listen(PORT, () => {
    console.log("[I] Express running.");
  });

  const httpServer = http.createServer(app).listen(port, HOST, () => {
    const tip = `ExpressServer is running at ${chalk.magenta.underline(
      address
    )}${logSymbols.success}`;

    console.log(tip);

    console.log("Serve Dir:", DIR_SERVE);

    const ips = ipv4StringArray();
    const links = ips
      .map((d) => chalk.magenta.underline(`http://${d}:${PORT}`))
      .join("\n");

    console.log("Listen at:");
    console.log(links);
  });

  process.on("SIGINT", () => {
    httpServer.close((err) => {
      err ? console.log(err) : null;

      const tip = chalk.greenBright.bold("\nGoodbye.");
      console.log(tip);

      process.exit();
    });
  });
};

if (require.main == module) {
  start();
}
