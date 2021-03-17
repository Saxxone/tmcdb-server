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

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  profile: string;

  @Column()
  title: string;

  @Index({ fulltext: true })
  @Column()
  surname: string;

  @Index({ fulltext: true })
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

  // @ManyToMany(() => Department)
  // @JoinTable()
  // departments: Department[];

  // @ManyToOne(() => Family, (family) => family.members)
  // family: Family;

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
