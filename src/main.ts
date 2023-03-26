import http from 'http';
import { app } from '@/app';
import { config } from '@/shared/config';

const server = http.createServer(app);

const port = config.get('port');
const hostname = config.get('ip');

const bootstrap = (): void => {
  server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

bootstrap();
