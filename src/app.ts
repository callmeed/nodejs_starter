import * as dotenv from "dotenv";
import express from 'express';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});