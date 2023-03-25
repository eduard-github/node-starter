import request from 'supertest';
import { app } from '../app/app';

it('initial test', async () => {
  await request(app).get('/').expect(200);
});
