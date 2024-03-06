import { IsEmail, IsString } from 'class-validator';
export class CreateAuthDto {
    @IsString()
    @IsEmail()
    readonly email: string;
}
