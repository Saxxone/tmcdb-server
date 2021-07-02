import { Module } from '@nestjs/common';
import { TitheService } from './tithe.service';
import { TitheController } from './tithe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tithe } from './entities/tithe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tithe])],
  controllers: [TitheController],
  providers: [TitheService],
  exports: [TypeOrmModule],
})
export class TitheModule {}
