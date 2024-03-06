import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsBoolean()
  readonly subscription: boolean;
}