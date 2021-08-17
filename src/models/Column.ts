import { Line } from './Line';

export interface Column {
    value: string;
    i: number;
    j: number;
    lineId: string;
    line: Line;
}
