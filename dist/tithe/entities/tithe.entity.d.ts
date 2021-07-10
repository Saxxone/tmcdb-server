import { BaseEntity } from 'typeorm';
export declare class Tithe extends BaseEntity {
    id: string;
    surname: string;
    otherNames: string;
    category: string;
    amountPaid: string;
    bank: string;
    purpose: string;
    phone: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
