import { Victory } from './Victory';
import { Match } from './Match';
import { PlayerMove } from './PlayerMove';
import { Entity } from './Entity';

export interface Result extends Entity {
    lastMove: PlayerMove;
    matchTime: Date;
    match: Match;
    matchId: string;
    victory: Victory;
}
