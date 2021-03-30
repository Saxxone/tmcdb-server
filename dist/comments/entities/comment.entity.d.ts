import { BaseEntity } from 'typeorm';
export declare class Comment extends BaseEntity {
    id: string;
    comment: string;
    commentBy?: string;
    user: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
