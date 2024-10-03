import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Country {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
  
    @Column({ type: 'varchar' })
    name: string;
  
    @Column({ type: 'int' })
    continent_id: number;
}
