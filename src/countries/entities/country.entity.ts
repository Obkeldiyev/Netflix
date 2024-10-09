import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar"})
    name: string;

    @Column({type: "int"})
    country_id: number;
}