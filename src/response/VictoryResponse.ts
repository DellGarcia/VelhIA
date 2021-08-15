import { EntityResponse } from "./EntityResponse";
import { PlayerResponse } from "./PlayerResponse";
import { ResultResponse } from "./ResultResponse";

export interface VictoryResponse extends EntityResponse {
  type: string;
  result: ResultResponse;
  winner: PlayerResponse;
  Loser: PlayerResponse;
}