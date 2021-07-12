import { Injectable } from '@nestjs/common';
import { CreateHomecellDto } from './dto/create-homecell.dto';
import { UpdateHomecellDto } from './dto/update-homecell.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Homecell } from './entities/homecell.entity';

@Injectable()
export class HomecellService {
  constructor(
    @InjectRepository(Homecell)
    private homecellRepository: Repository<Homecell>,
  ) {}

  async create(createHomecellDto: CreateHomecellDto) {
    return await this.homecellRepository.save(createHomecellDto);
  }

  async findAll() {
    return await this.homecellRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} homecell`;
  }

  update(id: number, updateHomecellDto: UpdateHomecellDto) {
    return `This action updates a #${id} homecell`;
  }

  remove(id: number) {
    return `This action removes a #${id} homecell`;
  }
}
