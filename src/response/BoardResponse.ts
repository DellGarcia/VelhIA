import { EntityResponse } from "./EntityResponse";
import { LineResponse } from "./LineResponse";

export interface BoardResponse extends EntityResponse {
  lines: LineResponse[];
}