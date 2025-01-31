import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../../../database/database.module';
import { ErrorService } from '../../../utils/error.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from '../../../middleware /auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UsersController],
  providers: [...usersProviders, ErrorService, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
