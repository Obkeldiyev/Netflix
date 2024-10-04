import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Director {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column()
    age: number
}
