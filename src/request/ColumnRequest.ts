import { EntityRequest } from "./EntityRequest";
import { LineRequest } from "./LineRequest";

export interface ColumnRequest extends EntityRequest {
  value: string;
  i: number;
  j: number;
  lineId: string;
  line: LineRequest;
}