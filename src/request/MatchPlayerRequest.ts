import { EntityRequest } from "./EntityRequest";
import { MatchRequest } from "./MatchRequest";
import { PlayerRequest } from "./PlayerRequest";

export interface MatchPlayerRequest extends EntityRequest {
  player: PlayerRequest;
  match: MatchRequest;
}