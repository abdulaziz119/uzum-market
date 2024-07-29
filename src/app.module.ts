import { Module } from '@nestjs/common';
import {ModulesModule} from "./src/modules/modules.module";

@Module({
  imports: [ModulesModule],
})
export class AppModule {}
