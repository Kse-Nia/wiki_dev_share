//import { express, Request, Response, Nextfunction, Error } from "express";
import * as express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import helmet from "helmet";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});

app.use((err: Error, req: Request, res: Response, next: Nextfunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
