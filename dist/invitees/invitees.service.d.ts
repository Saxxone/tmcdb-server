import { CreateInviteeDto } from './dto/create-invitee.dto';
import { UpdateInviteeDto } from './dto/update-invitee.dto';
export declare class InviteesService {
    create(createInviteeDto: CreateInviteeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInviteeDto: UpdateInviteeDto): string;
    remove(id: number): string;
}
