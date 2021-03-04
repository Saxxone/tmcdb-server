import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  Like,
  MoreThanOrEqual,
  Raw,
  Repository,
  UpdateResult,
} from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async findAll(page, size): Promise<User[]> {
    return await this.userRepository.find({
      take: size,
      skip: size * page,
      order: {
        surname: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async findByDate(start, end) {
    return await this.userRepository.find({
      where: {
        createdAt: Between(start, end),
      },
    });
  }
  async search(q) {
    return await this.userRepository.find({
      where: [{ surname: Like(`%${q}%`) }, { otherNames: Like(`%${q}%`) }],
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<UpdateResult> {
    return await this.userRepository.softDelete(id);
  }
}
