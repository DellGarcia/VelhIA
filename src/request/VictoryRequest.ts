import { EntityRequest } from "./EntityRequest";
import { PlayerRequest } from "./PlayerRequest";
import { ResultRequest } from "./ResultRequest";

export interface VictoryRequest extends EntityRequest {
  type: string;
  result: ResultRequest;
  winner: PlayerRequest;
  loser: PlayerRequest;
}