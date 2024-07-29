// import { AuthLoginDto } from '../../structures/dto/auth-login.dto';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
//
// import { UsersEntity } from '../entity/users.entity';
// export class AuthDashboardService {
//   static async login(payload: AuthLoginDto) {
//     const admin: any = await UsersEntity.findOne({
//       where: {
//         email: payload.email,
//       },
//     });
//
//     if (!admin) {
//       return AuthDashboard.EmailNotFound;
//     }
//
//     const isPasswordMatch = await bcrypt
//       .compare(payload.password.toString(), admin.password)
//       .catch((err) => {
//         throw new Error(err);
//       });
//
//     const access_token = jwt.sign(
//       {
//         id: admin.id,
//         email: admin.email,
//       },
//       env('FRONTEND_JWT_SECRET'),
//     );
//
//     return {
//       password_match: !!isPasswordMatch,
//       access_token: access_token,
//       email: admin.email,
//       role: admin.role,
//     };
//   }
// }
