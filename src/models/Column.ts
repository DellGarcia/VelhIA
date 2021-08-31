import { Entity } from './Entity';
import { Line } from './Line';

export interface Column extends Entity {
    value: string;
    i: number;
    j: number;
    lineId: string;
    line: Line;
}
