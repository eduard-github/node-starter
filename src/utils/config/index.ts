import convict from 'convict';
import dotenv from 'dotenv';

dotenv.config();

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: '*',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  database: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'PG_HOST'
    },
    port: {
      doc: 'Database port',
      format: 'port',
      default: 5432,
      env: 'PG_PORT'
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'postgres',
      env: 'PG_USER'
    },
    password: {
      doc: 'Database password',
      format: String,
      default: 'postgres',
      env: 'PG_PASSWORD'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'myapp',
      env: 'PG_DATABASE'
    }
  }
});

config.validate({ allowed: 'strict' });

export { config };
