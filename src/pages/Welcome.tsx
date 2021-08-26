import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button';
import { MatchType } from '../enum/MatchType';

import { Info } from '@styled-icons/feather';
import { PlayCircle } from '@styled-icons/material-outlined';

import hoverSound from '../sounds/interface-click.wav';
import clickSound from '../sounds/light-button.wav';

import '../styles/welcome.scss';
import { Logo } from '../components/Logo';

export function Welcome() {
  const history = useHistory();
  const [resumed, setResumed] = useState(false);

  const context = new AudioContext();

  function resumeGame() {
    context.resume().then(() => {
      setResumed(true);
    });
  }

  function handleCreateMatch(matchType: MatchType) {
    history.push(`/create/${MatchType[matchType]}`);
  }

  return (
    <div id="page-welcome">
      <Logo />
      {resumed ?
        <div className="play-options">
          <Button hover={hoverSound} click={clickSound} action={() => handleCreateMatch(MatchType.PVP_LOCAL)}>Local</Button>
          <Button hover={hoverSound} click={clickSound} action={() => handleCreateMatch(MatchType.PVP_ONLINE)}>Online</Button>
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
