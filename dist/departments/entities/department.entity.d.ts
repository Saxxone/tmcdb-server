import { BaseEntity } from 'typeorm';
export declare class Department extends BaseEntity {
    id: string;
    leader: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
