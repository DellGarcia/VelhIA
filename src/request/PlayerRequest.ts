import { AlgorithmType } from "../enum/AlgorithmType";
import { PlayerType } from "../enum/PlayerType";
import { EntityRequest } from "./EntityRequest";

export interface PlayerRequest extends EntityRequest {
  name: string;
  type: PlayerType;
  algorithmType: AlgorithmType;
  startsPlaying: boolean;
}
