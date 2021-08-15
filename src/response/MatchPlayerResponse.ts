import { EntityResponse } from "./EntityResponse";
import { MatchResponse } from "./MatchResponse";
import { PlayerResponse } from "./PlayerResponse";

export interface MatchPlayerResponse extends EntityResponse {
  player: PlayerResponse;
  match: MatchResponse;
}