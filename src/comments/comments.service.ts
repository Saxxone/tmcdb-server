import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
  ) {}
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    return await this.commentsRepository.save(createCommentDto);
  }

  findAll() {
    return `This action returns all comments`;
  }

  async findByUser(id: string) {
    return await this.commentsRepository.find({
      relations: ['user'],
      where: { user: id },
      order: {
        updatedAt: 'DESC',
      },
      take: 10,
      skip: 0,
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: string) {
    return await this.commentsRepository.softDelete(id);
  }
}
