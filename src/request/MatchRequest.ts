import { MatchPlayerRequest } from './MatchPlayerRequest';
import { MatchType } from "../enum/MatchType";
import { EntityRequest } from "./EntityRequest";

export interface MatchRequest extends EntityRequest {
  type: MatchType;
  players: MatchPlayerRequest[];
}