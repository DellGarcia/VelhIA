import { PlayerMove } from './PlayerMove';
import { Match } from './Match';
import { AlgorithmType } from './../enum/AlgorithmType';
import { PlayerType } from './../enum/PlayerType';
import { Entity } from './Entity';

export interface Player extends Entity {
    name: string;
    type: PlayerType;
    algorithmType: AlgorithmType;
    piece: string;
    startPlaying: boolean;
    matches: Match[];
    moves: PlayerMove[];
}
