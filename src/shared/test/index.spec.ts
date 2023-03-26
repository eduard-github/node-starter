import { app } from '../app/app';
import request from 'supertest';

it('initial test', async () => {
  await request(app).get('/').expect(200);
});
