import { Board } from '../components/Board';

import '../styles/match.scss';

export function Match() {

  const board = [
    [{value: 'x', i:0, j:0}, {value: 'x', i:0, j:0}, {value: 'x', i:0, j:0}],
    [{value: 'x', i:0, j:0}, {value: 'o', i:0, j:0}, {value: 'x', i:0, j:0}],
    [{value: 'x', i:0, j:0}, {value: 'x', i:0, j:0}, {value: 'x', i:0, j:0}],
  ]

  return (
    <div id="match-page">
      <Board lines={board}/>
    </div>
  )
}