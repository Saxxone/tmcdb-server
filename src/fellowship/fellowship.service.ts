import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFellowshipDto } from './dto/create-fellowship.dto';
import { UpdateFellowshipDto } from './dto/update-fellowship.dto';
import { Fellowship } from './entities/fellowship.entity';

@Injectable()
export class FellowshipService {
  constructor(
    @InjectRepository(Fellowship) private fellowshipRepository: Repository<Fellowship>,
  ) {}

  async  create(createFellowshipDto: CreateFellowshipDto): Promise<Fellowship> {
    return await this.fellowshipRepository.save(createFellowshipDto);;
  }

  async findAll(): Promise<Fellowship[]> {
    return await this.fellowshipRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fellowship`;
  }

  update(id: number, updateFellowshipDto: UpdateFellowshipDto) {
    return `This action updates a #${id} fellowship`;
  }

  remove(id: number) {
    return `This action removes a #${id} fellowship`;
  }
}
