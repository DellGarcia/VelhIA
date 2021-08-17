import { Result } from './Result';
import { Board } from './Board';
import { Player } from './Player';
import { MatchType } from './../enum/MatchType';
import { Entity } from './Entity';

export interface Match extends Entity {
    type: MatchType;
    players: Player[];
    round: number;
    board: Board;
    result: Result;
}
