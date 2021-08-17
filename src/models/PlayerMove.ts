import { Column } from './Column';
import { Player } from './Player';
import { Entity } from './Entity';

export interface PlayerMove extends Entity {
    playerId: string;
    player: Player;
    columnId: string;
    column: Column;
}
