import { IsBoolean } from 'class-validator';

export class CreateSubDto {
    @IsBoolean()
    readonly subscription: boolean;
}
