import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'urls' })
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.urls, { nullable: false })
  user: User;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'varchar' })
  hash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
