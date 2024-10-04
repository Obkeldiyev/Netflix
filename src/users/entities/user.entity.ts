import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  second_name: string;

  @Column({ type: 'varchar' })
  login: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'int' })
  country_id: number;
}
