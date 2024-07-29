import { IsDefined, IsIn, IsNotEmpty, IsOptional } from 'class-validator';
// export class ChatCreateDashboardDto {
//   @IsDefined()
//   uuid: string;
//
//   @IsOptional()
//   type: number;
//
//   @IsDefined()
//   message_from: number;
//
//   @IsDefined()
//   message_to: number;
// }

export class UserCreateFrontendDto {
  @IsDefined()
  email: string;

  @IsOptional()
  password: string;

  @IsDefined()
  user_type: number;

  @IsDefined()
  first_name: string;

  @IsDefined()
  last_name: string;

  @IsOptional()
  @IsIn(['en', 'ru', 'uz'])
  language: string;
}

// export class PaginationParams {
//   @IsDefined()
//   page: number;
//
//   @IsDefined()
//   limit: number;
//
//   @IsDefined()
//   chat_id: number;
// }
//
// export class ChatUpdateDto {
//   @IsDefined()
//   id: number;
//
//   @IsOptional()
//   @IsNotEmpty()
//   uuid: string;
//
//   @IsOptional()
//   @IsNotEmpty()
//   type: number;
//
//   @IsOptional()
//   @IsNotEmpty()
//   message_from: number;
//
//   @IsOptional()
//   @IsNotEmpty()
//   message_to: number;
// }

export interface SingleResponse<T> {
  result: T;
}
