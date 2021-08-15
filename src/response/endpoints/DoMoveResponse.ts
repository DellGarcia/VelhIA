import { BoardResponse } from "../BoardResponse";
import { PlayerResponse } from "../PlayerResponse";

export interface DoMoveResponse {
  sucess: boolean;
  nextToPlay: PlayerResponse;
  board: BoardResponse;
}