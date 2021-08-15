import { EntityResponse } from "./EntityResponse";
import { PlayerMoveResponse } from "./PlayerMoveResponse";
import { VictoryResponse } from "./VictoryResponse";

export interface ResultResponse extends EntityResponse {
  lastMove: PlayerMoveResponse;
  moves: number;
  matchTime: Date;
  victory: VictoryResponse;
}