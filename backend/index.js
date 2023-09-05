import path from 'path'
import express from 'express'
import { client } from './config/prismicConfig.js'
import * as prismic from '@prismicio/client';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.locals.ctx = {
    prismic,
  }
  next()
})

app.get('/', async (req, res) => {
  const document = await client.getAllByType(client.routes[0]['type'])
  res.json(document);
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})