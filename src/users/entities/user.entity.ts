import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  profile: string;

  @Column()
  title: string;

  @Column()
  surname: string;

  @Column()
  otherNames: string;

  @Column()
  status: string;

  @Column()
  gender: string;

  @Column()
  dob: string;

  @Column()
  age: string;

  @Column()
  departments: string;

  @Column()
  mafaFamily: string;

  @Column()
  address: string;

  @Column()
  whatsappNumber: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  stateOfOrigin: string;

  @Column()
  maritalStatus: string;

  @Column()
  weddingAnniversary: string;

  @OneToMany((type) => Comment, (comments) => comments.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  comments: Comment[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
