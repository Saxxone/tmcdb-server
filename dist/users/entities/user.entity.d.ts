import { BaseEntity } from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
export declare class User extends BaseEntity {
    id: string;
    profile: string;
    title: string;
    surname: string;
    otherNames: string;
    status: string;
    gender: string;
    dob: string;
    age: string;
    address: string;
    whatsappNumber: string;
    phoneNumber: string;
    email: string;
    stateOfOrigin: string;
    maritalStatus: string;
    weddingAnniversary: string;
    comments: Comment[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
