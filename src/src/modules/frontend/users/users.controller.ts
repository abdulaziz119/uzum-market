import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UsersEntity } from '../../../entity/users.entity';
import { UsersService } from './users.service';
import {
  SingleResponse,
  UserCreateFrontendDto,
  UserLoginFrontendDto,
} from './dto/users.dto';

@Controller('/frontend/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/register')
  @HttpCode(201)
  async register(
    @Body() payload: UserCreateFrontendDto,
  ): Promise<SingleResponse<UsersEntity>> {
    return this.userService.register(payload);
  }

  @Post('/login')
  @HttpCode(201)
  async login(
    @Body() payload: UserLoginFrontendDto,
  ): Promise<SingleResponse<UsersEntity>> {
    return this.userService.login(payload);
  }
}
