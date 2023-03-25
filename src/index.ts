import http from 'http';
import dotenv from 'dotenv';
import { app } from '@app/app';

dotenv.config();

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer(app);

const bootstrap = (): void => {
  server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

bootstrap();
