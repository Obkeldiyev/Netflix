import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Dislike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'varchar' })
  film_id: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'NOW()' })
  time_liked: Date;
}
