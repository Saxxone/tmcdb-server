import { Injectable } from '@nestjs/common';
import { CreateTitheDto } from './dto/create-tithe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTitheDto } from './dto/update-tithe.dto';
import { Repository } from 'typeorm';
import { Tithe } from './entities/tithe.entity';

@Injectable()
export class TitheService {
  constructor(
    @InjectRepository(Tithe) private titheRepository: Repository<Tithe>,
  ) {}

  async create(createTitheDto: CreateTitheDto): Promise<Tithe> {
    return await this.titheRepository.save(createTitheDto);
  }

  async findAll(): Promise<Tithe[]> {
    return await this.titheRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tithe`;
  }

  update(id: number, updateTitheDto: UpdateTitheDto) {
    return `This action updates a #${id} tithe`;
  }

  remove(id: number) {
    return `This action removes a #${id} tithe`;
  }
}
