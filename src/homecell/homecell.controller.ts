import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { HomecellService } from './homecell.service';
import { CreateHomecellDto } from './dto/create-homecell.dto';
import { UpdateHomecellDto } from './dto/update-homecell.dto';
import { Homecell } from './entities/homecell.entity';

@Controller('homecell')
export class HomecellController {
  constructor(private readonly homecellService: HomecellService) {}

  @Post()
  create(@Body() createHomecellDto: CreateHomecellDto): Promise<CreateHomecellDto> {
    return this.homecellService.create(createHomecellDto);
  }

  @Get()
  findAll(): Promise<Homecell[]> {
    return this.homecellService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homecellService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHomecellDto: UpdateHomecellDto) {
    return this.homecellService.update(+id, updateHomecellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homecellService.remove(+id);
  }
}
