import { Info } from '@styled-icons/feather';
import { PlayCircle } from '@styled-icons/material-outlined';

import { useState } from 'react';
import { Button } from '../components/Button';

import hoverSound from '../sounds/interface-click.wav';
import clickSound from '../sounds/light-button.wav';

import '../styles/welcome.scss';

export function Welcome() {
  const [resumed, setResumed] = useState(false);
  const [localMatch, setLocalMatch] = useState(false);

  const context = new AudioContext();

  function resumeGame() {
    context.resume().then(() => {
      setResumed(true);
    });
  }

  return (
    <div id="page-welcome">
      <h1>Velh<span>IA</span></h1>
      {resumed ?
        !localMatch ? 
          <div className="play-options">
            <Button hover={hoverSound} click={clickSound} action={() => setLocalMatch(true)}>Local</Button>
            <Button hover={hoverSound} click={clickSound}>Online</Button>
          </div>
          :
          <div className="play-options">
            <Button hover={hoverSound} click={clickSound}>1P vs 2P</Button>
            <Button hover={hoverSound} click={clickSound}>1P vs COM</Button>
            <Button hover={hoverSound} click={clickSound} action={() => setLocalMatch(false)}>Voltar</Button>
          </div> 
        :
        <div className="play-options">
          <PlayCircle className="play" onClick={resumeGame}/>
        </div>
      }
      <Info className="info-icon" />
    </div>
  );
}
