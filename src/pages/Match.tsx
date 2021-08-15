import { Board } from '../components/Board';

import '../styles/match.scss';

export function Match() {

  const lines = [
    [{value: 'x', i:0, j:0}, {value: 'x', i:0, j:1}, {value: 'x', i:0, j:2}],
    [{value: 'x', i:1, j:0}, {value: 'o', i:1, j:1}, {value: '', i:1, j:2}],
    [{value: 'x', i:2, j:0}, {value: 'x', i:2, j:1}, {value: 'x', i:2, j:2}],
  ]

  return (
    <div id="match-page">
      <Board lines={lines}/>
    </div>
  )
}