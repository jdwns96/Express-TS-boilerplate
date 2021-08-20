import express from "express";
import type { Request, Response, NextFunction, ErrorRequestHandler } from "express";

const app = express();

app.set("port", process.env.PORT || 8080);

app.get("/", (req: Request, res: Response) => {
  res.send("express-ts");
});

app.use(((err: any, req: Request, res: Response, next: NextFunction) => {
  // error
  console.error(err);
  res.status(500).send(err.message);
}) as ErrorRequestHandler);

app.listen(app.get("port"), () => {
  console.log("server is running :", app.get("port"));
});
