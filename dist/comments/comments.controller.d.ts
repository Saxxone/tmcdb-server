import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<import("./entities/comment.entity").Comment>;
    findAll(): string;
    findByUser(id: string): Promise<import("./entities/comment.entity").Comment[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): string;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
