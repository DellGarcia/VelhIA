import { MatchType } from "../enum/MatchType";
import { BoardResponse } from "./BoardResponse";
import { EntityResponse } from "./EntityResponse";
import { MatchPlayerResponse } from "./MatchPlayerResponse";

export interface MatchResponse extends EntityResponse {
  type: MatchType;
  players: MatchPlayerResponse[];
  board: BoardResponse;
}