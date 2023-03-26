import { Pool } from 'pg';
import { config } from '../config';

const pool = new Pool({
  user: config.get('database.user'),
  password: config.get('database.password'),
  host: config.get('database.host'),
  database: config.get('database.name'),
  port: config.get('database.port')
});

export { pool };
