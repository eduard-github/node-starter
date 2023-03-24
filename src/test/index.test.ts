import request from 'supertest';
import { app } from '../server';

it('initial test', async () => {
  await request(app).get('/').expect(200);
});
