import { Module } from '@nestjs/common';
import { SubService } from './sub.service';
import { SubController } from './sub.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [SubController],
  providers: [SubService],
  imports: [UsersModule]
})
export class SubModule {}
