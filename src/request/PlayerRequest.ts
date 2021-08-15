import { AlgoritmType } from "../enum/AlgoritmType";
import { PlayerType } from "../enum/PlayerType";
import { EntityRequest } from "./EntityRequest";

export interface PlayerRequest extends EntityRequest {
  name: string;
  type: PlayerType;
  algoritmType: AlgoritmType;
  startsPlaying: boolean;
}