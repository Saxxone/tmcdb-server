import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const saltOrRounds = 10;
    const password = createAdminDto.password;
    createAdminDto.password = await bcrypt.hash(password, saltOrRounds);
    console.log(createAdminDto);
    return this.adminRepository.save(createAdminDto);
  }
  async findOne(username: string): Promise<Admin | any> {
    return this.adminRepository.findOne({
      where: {
        username: username,
      },
    });
  }
}
