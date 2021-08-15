import { ColumnResponse } from "./ColumnResponse";
import { EntityResponse } from "./EntityResponse";

export interface LineResponse extends EntityResponse {
  columns: ColumnResponse[];
}