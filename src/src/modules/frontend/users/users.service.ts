import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../../../entity/users.entity';
import { ErrorService } from '../../../utils/error.service';
import { MODELS } from '../../../constants';
import {
  SingleResponse,
  UserCreateFrontendDto,
  UserLoginFrontendDto,
} from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../../../middleware /auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(MODELS.USERS)
    private readonly usersRepo: Repository<UsersEntity>,
    readonly errorService: ErrorService,
    readonly authService: AuthService,
  ) {}

  async register(payload: UserCreateFrontendDto): Promise<SingleResponse<any>> {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const UsersModule = new UsersEntity();
    UsersModule.email = payload.email;
    UsersModule.password = hashedPassword;
    UsersModule.user_type = payload.user_type;
    UsersModule.first_name = payload.first_name;
    UsersModule.last_name = payload.last_name;
    UsersModule.language = payload?.language;
    try {
      const newUser = await this.usersRepo.save(UsersModule);
      const token = await this.authService.generateToken(newUser);
      return { result: { data: newUser, token } };
    } catch (error) {
      this.errorService.handleHttpException(error, 'Failed to create a User');
      throw error;
    }
  }

  async login(payload: UserLoginFrontendDto): Promise<any> {
    const { email, password } = payload;
    try {
      const userModule = await this.usersRepo.findOne({
        where: { email },
      });
      if (!userModule) {
        throw new NotFoundException(`User with email ${email} not found`);
      }
      const isPasswordMatch = await bcrypt.compare(
        password,
        userModule.password,
      );
      if (!isPasswordMatch) {
        throw new NotFoundException('Incorrect password');
      }
      const payload = { userId: userModule.id };
      const token = await this.authService.generateToken(payload);

      return { result: { token } };
    } catch (error) {
      this.errorService.handleHttpException(error, 'Failed to login user');
      throw error;
    }
  }
}
