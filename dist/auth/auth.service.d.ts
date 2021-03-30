import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private adminService;
    private jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(user: any): Promise<{
        access_token: string;
    }>;
}
