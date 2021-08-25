import { X, Circle } from 'styled-icons/feather'

// import { VictoryLine } from '../styles/components/VictoryLine';

import '../styles/board.scss';

type Element = {
  value: string,
  i: number,
  j: number
}

type BoardProps = {
  lines: Array<Element[]>
};

export const Board: React.FC<BoardProps> = ({lines}) => {

  function HandleCheckHere(element: Element) {
    const {i, j} = element;
    alert(`Você clicou na posição ${i} ${j}`)
  }

  return (
    <div className="board">
      {/* <VictoryLine type='H2' /> */}
      {lines.map((line) => {
        return (
          <div>
            {line.map(element => 
              <span onClick={() => HandleCheckHere(element)}>
                {element.value === 'x' && <X className="x-icon"/>}
                {element.value === 'o' && <Circle className="circle-icon"/>}
              </span>
            )}
          </div>
        )
      })}
    </div>
  );
}