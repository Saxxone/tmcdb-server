import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminService {
    private jwtService;
    private adminRepository;
    constructor(jwtService: JwtService, adminRepository: Repository<Admin>);
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findOne(token: string): Promise<Admin | any>;
}
