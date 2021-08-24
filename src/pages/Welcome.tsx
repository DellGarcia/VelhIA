import { Info } from '@styled-icons/feather'
import { Button } from '../components/Button';

import '../styles/welcome.scss';

export function Welcome() {
  return (
    <div id="page-welcome">
      <h1>Velh<span>IA</span></h1>
      <div className="play-options">
        <Button text="Local" />
        <Button text="Online" />
      </div>
      <Info className="info-icon" />
    </div>
  );
}
