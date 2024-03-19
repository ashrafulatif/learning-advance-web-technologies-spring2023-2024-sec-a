import { User } from 'src/users/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const typeOrmconfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'midexam',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [User],
  synchronize: true,
};

export default typeOrmconfig;
