import { Info } from '@styled-icons/feather';
import { PlayCircle } from '@styled-icons/material-outlined';

import { useState } from 'react';
import { Button } from '../components/Button';

import clickSound from '../sounds/interface-click.wav';

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
            <Button source={clickSound} onClick={() => setLocalMatch(true)}>Local</Button>
            <Button source={clickSound}>Online</Button>
          </div>
          :
          <div className="play-options">
            <Button source={clickSound}>1P vs 2P</Button>
            <Button source={clickSound}>1P vs COM</Button>
            <Button source={clickSound} onClick={() => setLocalMatch(false)}>Voltar</Button>
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
