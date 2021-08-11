import { Info } from '@styled-icons/feather'

import '../styles/welcome.scss';

export function Welcome() {
  return (
    <div id="page-welcome">
      <h1>Velh<span>IA</span></h1>
      <div className="play-options">
        <button>Local</button>
        <button>Online</button>
      </div>
      <Info className="info-icon" />
    </div>
  );
}
