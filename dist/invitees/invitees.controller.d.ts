import { InviteesService } from './invitees.service';
import { CreateInviteeDto } from './dto/create-invitee.dto';
import { UpdateInviteeDto } from './dto/update-invitee.dto';
export declare class InviteesController {
    private readonly inviteesService;
    constructor(inviteesService: InviteesService);
    create(createInviteeDto: CreateInviteeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateInviteeDto: UpdateInviteeDto): string;
    remove(id: string): string;
}
