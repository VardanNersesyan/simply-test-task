import { IsString, IsOptional, IsEnum, IsPositive } from 'class-validator';
import { UserTypeEnum } from '../entities/user.entity';
import { Transform } from 'class-transformer';

/*
 * @TODO Move PaginationDto to some common place for reuse in another list responses
 * */
export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  page?: number;

  @IsPositive()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  limit?: number;
}

export class UserListRequestDto extends PaginationDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  surname?: string;

  @IsEnum(UserTypeEnum)
  @IsOptional()
  type?: string;
}
