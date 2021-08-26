import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { PlayerInput } from "../components/PlayerInput";
import { Select } from "../components/Select";
import { MatchType } from "../enum/MatchType";

import '../styles/register.scss';

interface RegisterParams {
  type: string;
}

export const Register = () => {
  const params = useParams<RegisterParams>();
  const history = useHistory();

  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const [matchType, setMatchType] = useState<MatchType>();

  useEffect(() => {
    const type = params.type;

    switch(type) {
      case "PVP_LOCAL": 
      case "PVP_ONLINE":
      case "PVE_ALGORITM":
        setMatchType(MatchType[type]);
        break;
      default:
        history.push('/');
    }
  }, [history, params.type]);

  return <div id="page-register">
    <Logo />
    <div className="players-container">
      <PlayerInput />
      <PlayerInput />
    </div>
    <Select value={matchType} onChange={(e: any) => setMatchType(e.target.value)}>
      <option value="0">1P vs 2P</option>
      <option value="1">1P vs COM</option>
      <option value="2">Online</option>
    </Select>
    <div className="button-container">
      <Button>Start</Button>
    </div>
  </div>
}