import { PartialType } from '@nestjs/mapped-types';
import { CreateSubDto } from './create-sub.dto';

export class UpdateSubDto extends PartialType(CreateSubDto) {}
