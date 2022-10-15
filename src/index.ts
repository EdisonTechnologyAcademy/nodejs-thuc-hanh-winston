import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import { logger } from "./logger/winston";

const PORT = 3000;
const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
    res.end("<h1>Hello winston!</h1>")
    throw new Error("Error test winston");
  } catch (err) {
    logger.error(err)
  }
})

app.listen(PORT, () => {
  console.log("App running with port: " + PORT);
});