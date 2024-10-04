import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MovieAward {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    movie_id: number
    @Column()
    award_id: number
}
