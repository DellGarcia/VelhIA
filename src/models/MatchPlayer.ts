import { Match } from './Match';
import { Player } from './Player';
import { Entity } from './Entity';

export interface MatchPlayer extends Entity {
    playerId: string;
    player: Player;
    matchId: string;
    match: Match;
}
