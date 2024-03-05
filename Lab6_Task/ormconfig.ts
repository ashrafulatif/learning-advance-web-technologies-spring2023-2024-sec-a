import { Product } from './src/entites/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test-postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [Product],
  synchronize: true,
};

export default config;
