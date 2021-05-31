/* eslint-disable @typescript-eslint/no-var-requires */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const path = require('path');

const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  name: 'default',
  database: 'gorestaurant.sqlite',
  migrations: [
    path.join(__dirname, '..', 'shared/typeorm/migrations/*{.ts,.js}'),
  ],
  entities: [
    path.join(__dirname, '..', 'modules/**/entities/*.entity{.ts,.js}'),
  ],
  cli: {
    migrationsDir: 'src/shared/typeorm/migrations',
  },
  synchronize: false,
  logging: true,
  autoLoadEntities: true,
};

export = config;
