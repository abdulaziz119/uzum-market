import { IsDefined } from 'class-validator';
export class NameDto {
  @IsDefined()
  ru: string;
  @IsDefined()
  en: string;
  @IsDefined()
  uz: string;
}
export class PaginateParamsDto {
  @IsDefined()
  page: number;
  @IsDefined()
  limit: number;
}
