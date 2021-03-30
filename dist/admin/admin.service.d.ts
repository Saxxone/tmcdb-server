import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findOne(username: string): Promise<Admin | any>;
}
