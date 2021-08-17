import { EntityRequest } from "./EntityRequest";
import { LineRequest } from "./LineRequest";
import { MatchRequest } from "./MatchRequest";

export interface BoardRequest extends EntityRequest {
  lines: LineRequest[];
  match: MatchRequest;
}
