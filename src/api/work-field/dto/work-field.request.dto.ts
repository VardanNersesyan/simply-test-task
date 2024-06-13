import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { trim } from '../../../common/utilities/sanitize.utility';
export class WorkFieldRequestDto {
  @MaxLength(255)
  @MinLength(1)
  @IsOptional()
  @Transform(trim)
  search?: string;
}
