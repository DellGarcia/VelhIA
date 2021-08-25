import { Player } from './../../models/Player';

export interface DoMoveResponse {
  sucess: boolean;
  nextToPlay: Player;
}
