import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): string;
    findByUser(id: string): Promise<Comment[]>;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
