import { Injectable } from '@nestjs/common';
import { CreateInviteeDto } from './dto/create-invitee.dto';
import { UpdateInviteeDto } from './dto/update-invitee.dto';

@Injectable()
export class InviteesService {
  create(createInviteeDto: CreateInviteeDto) {
    return 'This action adds a new invitee';
  }

  findAll() {
    return `This action returns all invitees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invitee`;
  }

  update(id: number, updateInviteeDto: UpdateInviteeDto) {
    return `This action updates a #${id} invitee`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitee`;
  }
}
