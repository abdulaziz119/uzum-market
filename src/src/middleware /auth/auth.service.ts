import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async generateToken(payload: Record<string, any>): Promise<string> {
    const newData = {
      id: payload.id,
      email: payload.email,
      user_type: payload.user_type,
      password: payload.password,
    };
    const secretKey = 'secret-key';
    return jwt.sign(newData, secretKey);
  }

  async verifyToken(token: string, secretKey: string): Promise<any> {
    return jwt.verify(token, secretKey);
  }
}
