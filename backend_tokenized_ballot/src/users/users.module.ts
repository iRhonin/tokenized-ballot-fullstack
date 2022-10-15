import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimsModule } from 'src/claims/claims.module';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    ClaimsModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
