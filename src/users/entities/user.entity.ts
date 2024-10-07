import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int'})
  id: number;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'int' })
  country_id: number;
}