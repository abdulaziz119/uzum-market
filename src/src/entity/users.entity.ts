import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'integer' })
  user_type: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    default: 'uz',
  })
  language: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
