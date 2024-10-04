import { Injectable } from '@nestjs/common';
import { CreateActorAwardDto } from './dto/create-actor-award.dto';
import { UpdateActorAwardDto } from './dto/update-actor-award.dto';

@Injectable()
export class ActorAwardService {
  create(createActorAwardDto: CreateActorAwardDto) {
    return 'This action adds a new actorAward';
  }

  findAll() {
    return `This action returns all actorAward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actorAward`;
  }

  update(id: number, updateActorAwardDto: UpdateActorAwardDto) {
    return `This action updates a #${id} actorAward`;
  }

  remove(id: number) {
    return `This action removes a #${id} actorAward`;
  }
}
