import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class Homecell extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
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
