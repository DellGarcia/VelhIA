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
 
  }

  return (
    <div className="board">
      {lines.map((line) => {
        return (
          <div>
            {line.map(element => <span><p onClick={() => {HandleCheckHere(element)}}>{element.value}</p></span>)}
          </div>
        )
      })}
    </div>
  );
}