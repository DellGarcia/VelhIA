import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Footer } from '../components/Footer';

import { Info } from '@styled-icons/feather';
import { Play } from '@styled-icons/fa-solid';

import hoverSound from '../sounds/interface-click.wav';
import clickSound from '../sounds/light-button.wav';

import '../styles/welcome.scss';

export function Welcome() {
  const history = useHistory();
  const [resumed, setResumed] = useState(false);

  const context = new AudioContext();

  function resumeGame() {
    context.resume().then(() => {
      setResumed(true);
    });
  }

  function handleCreateMatch(online: boolean) {
    history.push(`/create/${online ? 'online':'local'}`);
  }

  return (
    <div id="page-welcome">
      <Logo />
      {resumed ?
        <div className="play-options">
          <Button hover={hoverSound} click={clickSound} action={() => handleCreateMatch(false)}>Local</Button>
          <Button hover={hoverSound} click={clickSound} action={() => handleCreateMatch(true)}>Online</Button>
        </div>
        :
        <div className="start-options">
          <Play className="play" onClick={resumeGame}/>
          <span onClick={resumeGame}>Play</span>
        </div>
      }
      <Info className="info-icon" />

      <Footer />
    </div>
  );
}
