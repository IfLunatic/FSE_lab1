import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  @IsOptional()
  readonly age: number;

  @IsString()
  @IsEmail()
  readonly email: string;
}