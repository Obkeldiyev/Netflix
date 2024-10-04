import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DirectorAward {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    director_id :number
    
    @Column()
    film_id: number

    @Column()
    award_id: number
}
