import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { PlayerInput } from "../components/PlayerInput";
import { Select } from "../components/Select";
import { MatchType } from "../enum/MatchType";

import hoverSound from '../sounds/interface-click.wav';
import clickSound from '../sounds/light-button.wav';

import '../styles/register.scss';

export const Register = () => {
  const history = useHistory();

  const [playerOneFirst, setPlayerOneFirst] = useState(true);

  const [matchType, setMatchType] = useState<MatchType>(0);


  return <div id="page-register">
    <Logo />
    <div className="players-container">
      <PlayerInput playerOneFirst={playerOneFirst} setPlayerOneFirst={setPlayerOneFirst}/>
      <PlayerInput playerOneFirst={!playerOneFirst} setPlayerOneFirst={setPlayerOneFirst}/>
    </div>
    <Select value={matchType} onChange={(e: any) => setMatchType(e.target.value)}>
      <option value="0">1P vs 2P</option>
      <option value="1">1P vs COM</option>
      <option value="3">COM vs COM</option>
    </Select>
    <div className="button-container">
      <Button hover={hoverSound} click={clickSound}>Start</Button>
    </div>
  </div>
}