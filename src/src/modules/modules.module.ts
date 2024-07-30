import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FrontendModule } from './frontend/frontend.module';

@Module({
  imports: [DatabaseModule, FrontendModule],
})
export class ModulesModule {}
