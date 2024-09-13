import "module-alias/register";
import express, { Request, Response } from "express";
import { TEXT } from "@/constants/value";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`${TEXT}_hello_world`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
