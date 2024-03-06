import { Controller, Get, Param } from '@nestjs/common';
import { SubService } from './sub.service';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Get(":id")
  check(@Param('id') id: string) {
    return this.subService.check(+id);
  }
}
