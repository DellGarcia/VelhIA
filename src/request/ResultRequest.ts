import { EntityRequest } from "./EntityRequest";
import { MatchRequest } from "./MatchRequest";
import { PlayerMoveRequest } from "./PlayerMoveRequest";
import { VictoryRequest } from "./VictoryRequest";

export interface ResultRequest  extends EntityRequest {
  lastMove: PlayerMoveRequest;
  moves: number;
  matchTime: Date;
  match: MatchRequest;
  victory: VictoryRequest;
}