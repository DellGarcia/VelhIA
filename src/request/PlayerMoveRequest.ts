import { ColumnRequest } from "./ColumnRequest";
import { EntityRequest } from "./EntityRequest";
import { PlayerRequest } from "./PlayerRequest";

export interface PlayerMoveRequest extends EntityRequest {
  player: PlayerRequest;
  column: ColumnRequest;
}