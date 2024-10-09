import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar"})
    full_name: string;

    @Column({type: "varchar"})
    username: string;

    @Column({type: "varchar"})
    password: string;
}