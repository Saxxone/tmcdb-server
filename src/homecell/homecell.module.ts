import { Module } from '@nestjs/common';
import { HomecellService } from './homecell.service';
import { HomecellController } from './homecell.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Homecell } from './entities/homecell.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Homecell])],
  controllers: [HomecellController],
  providers: [HomecellService],
  exports: [TypeOrmModule],
})
export class HomecellModule {}
