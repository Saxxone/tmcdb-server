import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Admin } from './entities/admin.entity';
import { AdminController } from './admin.controller';
import { jwtConstants } from '../auth/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2592000s' },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [TypeOrmModule, AdminService, JwtModule],
})
export class AdminModule {}
