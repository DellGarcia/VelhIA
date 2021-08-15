import { MatchType } from "../enum/MatchType";
import { EntityRequest } from "./EntityRequest";
import { MatchPlayerRequest } from "./MatchPlayerRequest";

export interface MatchRequest extends EntityRequest {
  type: MatchType;
  players: MatchPlayerRequest[];
}