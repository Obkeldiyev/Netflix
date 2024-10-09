import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Award {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    year_taken:number
}
