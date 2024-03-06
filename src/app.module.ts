import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubModule } from './sub/sub.module';

@Module({
  imports: [UsersModule, AuthModule, SubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
