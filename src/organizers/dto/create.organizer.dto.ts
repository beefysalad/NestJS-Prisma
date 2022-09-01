import { OrgType } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrganizerDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(OrgType)
  @IsNotEmpty()
  type: OrgType;
}
