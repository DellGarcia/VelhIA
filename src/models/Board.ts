import { Line } from './Line';
import { Match } from './Match';
import { Entity } from './Entity';

export interface Board extends Entity {
    match: Match;
    matchId: string;
    lines: Line[];
}
