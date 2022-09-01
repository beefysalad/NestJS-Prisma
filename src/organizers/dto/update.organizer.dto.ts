import { OrgType } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
} from 'class-validator';

export class UpdateOrganizerDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsEnum(OrgType)
  type?: OrgType;
}
