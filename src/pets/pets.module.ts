import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pet} from "./pet.entity";

@Module({
  //repository를 추가하기 위한 작업
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService, PetsResolver]
})
export class PetsModule {}
