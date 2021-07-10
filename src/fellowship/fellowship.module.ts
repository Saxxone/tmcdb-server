import { Module } from '@nestjs/common';
import { FellowshipService } from './fellowship.service';
import { FellowshipController } from './fellowship.controller';

@Module({
  controllers: [FellowshipController],
  providers: [FellowshipService]
})
export class FellowshipModule {}
