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

  async findAll(query): Promise<any> {
    const take = query.size;
    const search = query.search;
    const page = query.page;
    const start = query.start;
    const end = query.end;
    if (search) {
      const count = await this.userRepository.count({
        where: [
          { surname: Like(`%${search}%`) },
          { otherNames: Like(`%${search}%`) },
        ],
        order: {
          surname: 'ASC',
        },
      });
      const all = await this.userRepository.find({
        take: take,
        skip: take * (page - 1),
        where: [
          { surname: Like(`%${search}%`) },
          { otherNames: Like(`%${search}%`) },
        ],
      });
      return { all: all, count: count };
    } else if (start) {
      const all = await this.userRepository.find({
        take: take,
        skip: take * (page - 1),
        order: {
          surname: 'ASC',
        },
        where: {
          createdAt: Between(start, end),
        },
      });
      const count = await this.userRepository.count({
        where: {
          createdAt: Between(start, end),
        },
      });
      return { all: all, count: count };
    }
    const all = await this.userRepository.find({
      take: take,
      skip: take * (page - 1),
      order: {
        surname: 'ASC',
      },
    });
    const count = await this.userRepository.count();

    return { all: all, count: count };
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
