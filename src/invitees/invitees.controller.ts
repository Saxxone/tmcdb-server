import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InviteesService } from './invitees.service';
import { CreateInviteeDto } from './dto/create-invitee.dto';
import { UpdateInviteeDto } from './dto/update-invitee.dto';

@Controller('invitees')
export class InviteesController {
  constructor(private readonly inviteesService: InviteesService) {}

  @Post()
  create(@Body() createInviteeDto: CreateInviteeDto) {
    return this.inviteesService.create(createInviteeDto);
  }

  @Get()
  findAll() {
    return this.inviteesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inviteesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInviteeDto: UpdateInviteeDto) {
    return this.inviteesService.update(+id, updateInviteeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inviteesService.remove(+id);
  }
}
