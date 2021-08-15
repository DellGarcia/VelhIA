import { ColumnResponse } from "./ColumnResponse";
import { EntityResponse } from "./EntityResponse";
import { PlayerResponse } from "./PlayerResponse";

export interface PlayerMoveResponse extends EntityResponse {
  player: PlayerResponse;
  column: ColumnResponse;
}