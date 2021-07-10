import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    DeleteDateColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
    Index,
    JoinTable,
    ManyToMany,
    ManyToOne,
  } from 'typeorm';
  import { Comment } from '../../comments/entities/comment.entity';
  import { Department } from '../../departments/entities/department.entity';
  import { Family } from '../../families/entities/family.entity';
  
export class Fellowship {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    surname: string;
    @Column()
    otherNames: string;
    @Column()
    address: string;
    @Column()
    gender: string;
    @Column()
    dob: string;
    @Column()
    department: string;
    @Column()
    chucit: string;
    @Column()
    fellowsshipLocation: string;
    @Column()
    phoneNumber: string;
    @Column()
    email: string;
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
}
