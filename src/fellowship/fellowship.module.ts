import { Module } from '@nestjs/common';
import { FellowshipService } from './fellowship.service';
import { FellowshipController } from './fellowship.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fellowship])],
  controllers: [FellowshipController],
  providers: [FellowshipService]
  exports: [TypeOrmModule],
})
export class FellowshipModule {}
