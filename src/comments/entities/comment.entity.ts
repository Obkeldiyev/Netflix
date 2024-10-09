import { LargeNumberLike } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  text: string;

  @Column({ type: 'int' })
  user_id: number;

  @Column({ type: 'int' })
  film_id: number;
}
