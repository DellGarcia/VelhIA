import { Info } from '@styled-icons/feather';
import { PlayCircle } from '@styled-icons/material-outlined';

import { useState } from 'react';
import { Button } from '../components/Button';

import retroClick from '../sounds/interface-click.wav';

import '../styles/welcome.scss';

export function Welcome() {
  const [resumed, setResumed] = useState(false);

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
        <div className="play-options">
          <Button source={retroClick}>Local</Button>
          <Button source={retroClick}>Online</Button>
        </div> :
        <div className="play-options">
          <PlayCircle className="play" onClick={resumeGame}/>
        </div>
      }
      <Info className="info-icon" />
    </div>
  );
}
