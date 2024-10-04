import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgePermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  age: number;
}
