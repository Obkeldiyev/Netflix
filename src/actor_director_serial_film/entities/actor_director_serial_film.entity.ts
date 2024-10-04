import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActorDirectorSerialFilm {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    actor_id: number
    @Column()
    director_id: number
    @Column()
    film_id: number
}
