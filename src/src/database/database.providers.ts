import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_DB,
  DB_UZUM_MARKET_SCHEMA,
} from '../utils/env';
import { UZUM_MARKET_SOURCE } from '../constants';
import { UsersEntity } from '../entity/users.entity';
import { ProductsEntity } from '../entity/products.entity';
import { GoodsEntity } from '../entity/goods.entity';
import { FavoritesEntity } from '../entity/favorites.entity';
import { PurchasedEntity } from '../entity/purchased.entity';

export const databaseProviders = [
  {
    provide: UZUM_MARKET_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASS,
        database: DB_DB,
        synchronize: true,
        logging: false,
        schema: DB_UZUM_MARKET_SCHEMA,
        entities: [
          UsersEntity,
          ProductsEntity,
          GoodsEntity,
          FavoritesEntity,
          PurchasedEntity,
        ],
      });
      await dataSource.initialize();
      return dataSource;
    },
  },
];
