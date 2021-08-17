import { Column } from './Column';
import { Board } from './Board';
import { Entity } from './Entity';

export interface Line extends Entity {
    boardId: string;
    board: Board;
    columns: Column[];
}
