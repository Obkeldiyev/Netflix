import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Continent {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar"})
    name: string;
}