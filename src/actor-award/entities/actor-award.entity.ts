import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActorAward {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    actor_id: number
    @Column()
    film_id: number
    @Column()
    award_id: number
}
