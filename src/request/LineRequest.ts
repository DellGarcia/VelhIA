import { BoardRequest } from "./BoardRequest";
import { ColumnRequest } from "./ColumnRequest";
import { EntityRequest } from "./EntityRequest";

export interface LineRequest extends EntityRequest {
  board: BoardRequest;
  columns: ColumnRequest[];
}