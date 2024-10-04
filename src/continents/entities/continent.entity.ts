import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Continent {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
