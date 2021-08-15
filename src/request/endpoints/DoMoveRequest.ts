import { ColumnRequest } from "../ColumnRequest";

export interface DoMoveRequest {
  matchId: string;
  column: ColumnRequest;
}