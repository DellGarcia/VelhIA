import { Scoreboard } from './Scoreboard';
import { Circle, X } from 'styled-icons/feather';

import '../styles/header.scss';

export function Header() {
  return (
    <header className="velhia-header">
      <div>
        <Scoreboard icon='x' score={0}/>
        <Scoreboard icon='o' score={1}/>
      </div>
      <div className="turn">
        Vez do {
          //<X className="x-icon"/>
          <Circle className="circle-icon"/>
        }
      </div>
    </header>
  )
}