import express from 'express';
export const app = express();

app.all('*', (req, res) => {
  res.send('Hello World!');
});
