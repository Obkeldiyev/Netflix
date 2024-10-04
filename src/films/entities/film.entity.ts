import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  age_permission: number;

  @Column({ type: 'int' })
  category_id: number;

  @Column({ type: 'int' })
  time: number;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'varchar' })
  desc: string;

  @Column({ type: 'int' })
  release_date: number;

  @Column({ type: 'varchar' })
  photos: string;

  @Column({ type: 'varchar' })
  videos: string;
}
