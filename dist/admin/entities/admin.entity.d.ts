import { BaseEntity } from 'typeorm';
export declare class Admin extends BaseEntity {
    id: string;
    username: string;
    password: string;
    email: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
