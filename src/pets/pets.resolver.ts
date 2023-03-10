import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import { PetsService } from "./pets.service";
import { Pet } from "./pet.entity";
import {CreatePetInput} from "./dto/create-pet.input";
import {In} from "typeorm";

@Resolver(of => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {
  }

  @Query(returns => Pet)
  getPet(@Args('id', {type: () => Int}) id: number): Promise<Pet> {
    return this.petsService.findOne(id)
  }
  @Query(returns => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(returns => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsService.createPet(createPetInput)
  }
}
