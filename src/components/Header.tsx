import { Scoreboard } from './Scoreboard';
import '../styles/header.scss';

export function Header() {
  return (
    <header className="velhia-header">
      <div>
        <Scoreboard icon='x' score={0}/>
        <Scoreboard icon='o' score={1}/>
      </div>
    </header>
  )
}