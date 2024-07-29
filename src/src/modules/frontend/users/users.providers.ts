import { DataSource } from 'typeorm';
import { UsersEntity } from '../../../entity/users.entity';
import { MODELS, UZUM_MARKET_SOURCE } from '../../../constants';

export const usersProviders = [
  {
    provide: MODELS.USERS,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersEntity),
    inject: [UZUM_MARKET_SOURCE],
  },
];
