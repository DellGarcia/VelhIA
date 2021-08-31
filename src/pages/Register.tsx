import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { PlayerInput } from "../components/PlayerInput";
import { Select } from "../components/Select";
import { MatchType } from "../enum/MatchType";

import hoverSound from '../sounds/interface-click.wav';
import clickSound from '../sounds/light-button.wav';

import '../styles/register.scss';

export interface PlayerData {
  nickname: string;
  sprite: string;
}

export const Register = () => {
  const history = useHistory();

  const [playerOneFirst, setPlayerOneFirst] = useState(true);
  const [playerOne, setPlayerOne] = useState<PlayerData>();
  const [playerTwo, setPlayerTwo] = useState<PlayerData>();

  const [matchType, setMatchType] = useState<MatchType>(0);

  function playerOneInputCallback(playerData: PlayerData) {
    setPlayerOne(playerData);
  }

  function playerTwoInputCallback(playerData: PlayerData) {
    setPlayerTwo(playerData);
  }

  async function handleCreateMatch() {
    const request = {
      type: matchType,
      players: [
          {
            player: {
              name: playerOne?.nickname,
              startPlaying: playerOneFirst
            }
          },
          {
            player: {
              name: playerTwo?.nickname,
              startPlaying: !playerOneFirst 
            }
          },
      ]
    }

    history.push({
      pathname: '/wait',
      state: {
        request,
        destiny: '/match'
      }
    });
  }

  return <div id="page-register">
    <Logo />
    <div className="players-container">
      <PlayerInput playerOneFirst={playerOneFirst} setPlayerOneFirst={setPlayerOneFirst} playerCallback={playerOneInputCallback}/>
      <PlayerInput playerOneFirst={!playerOneFirst} setPlayerOneFirst={setPlayerOneFirst} playerCallback={playerTwoInputCallback} reversed/>
    </div>
    <Select value={matchType} onChange={(e: any) => setMatchType(e.target.value)}>
      <option value="0">1P vs 2P</option>
      <option value="1">1P vs COM</option>
      <option value="3">COM vs COM</option>
    </Select>
    <div className="button-container">
      <Button hover={hoverSound} click={clickSound} onClick={handleCreateMatch}>Start</Button>
    </div>
  </div>
}