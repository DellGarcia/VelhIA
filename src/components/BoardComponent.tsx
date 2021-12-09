import React from 'react';
import { X, Circle } from '@styled-icons/feather';
import { Board } from '../models/Board';
import { Column } from '../models/Column';

// import { VictoryLine } from '../styles/components/VictoryLine';

import '../styles/board.scss';

type BoardProps = {
  board: Board;
  clickCallback: Function;
};

export const BoardComponent: React.FC<BoardProps> = ({ board, clickCallback }) => {

  function HandleCheckHere(column: Column) {
    if(column.value !== "")
      return;

    clickCallback(column.id);
  }
  
  return (
    <div className="board">
      {/* <VictoryLine type='H2' /> */}
      {board.lines.map((line) => {
        return (
          <div key={line.id}>
            {line.columns.map(column => 
              <span key={column.id} onClick={() => HandleCheckHere(column)}>
                {column.value === 'x' && <X className="x-icon"/>}
                {column.value === 'o' && <Circle className="circle-icon"/>}
              </span>
            )}
          </div>
        )
      })}
    </div>
  );
}