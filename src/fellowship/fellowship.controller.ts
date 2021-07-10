import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FellowshipService } from './fellowship.service';
import { CreateFellowshipDto } from './dto/create-fellowship.dto';
import { UpdateFellowshipDto } from './dto/update-fellowship.dto';

@Controller('fellowship')
export class FellowshipController {
  constructor(private readonly fellowshipService: FellowshipService) {}

  @Post()
  create(@Body() createFellowshipDto: CreateFellowshipDto) {
    return this.fellowshipService.create(createFellowshipDto);
  }

  @Get()
  findAll() {
    return this.fellowshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fellowshipService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFellowshipDto: UpdateFellowshipDto) {
    return this.fellowshipService.update(+id, updateFellowshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fellowshipService.remove(+id);
  }
}
