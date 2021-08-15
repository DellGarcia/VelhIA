import { AlgorithmType } from "../enum/AlgorithmType";
import { PlayerType } from "../enum/PlayerType";
import { EntityResponse } from "./EntityResponse";

export interface PlayerResponse extends EntityResponse {
  name: string;
  type: PlayerType;
  algorithmType: AlgorithmType;
  piece: string;
  startsPlaying: boolean;
}