// import 'module-alias/register';
import http from 'http';
import dotenv from 'dotenv';
import { app } from '@/app/app';
import { config } from '@/utils/config';

dotenv.config();

const server = http.createServer(app);

const bootstrap = (): void => {
  server.listen(config.get('port'), () => {
    console.log(
      `Server running at http://${config.get('ip')}:${config.get('port')}/`
    );
  });
};

bootstrap();
