import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { PlayerInput } from "../components/PlayerInput";
import { Select } from "../components/Select";
import { MatchType } from "../enum/MatchType";
import { PlayerType } from "../enum/PlayerType";

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
  const [matchType, setMatchType] = useState<MatchType>(0);
  const [playerTypes, setPlayerTypes] = useState<PlayerType[]>([PlayerType.HUMAN, PlayerType.HUMAN]);

  const [playerOne, setPlayerOne] = useState<PlayerData>();
  const [playerTwo, setPlayerTwo] = useState<PlayerData>();

  function playerOneInputCallback(playerData: PlayerData) {
    setPlayerOne(playerData);
  }

  function playerTwoInputCallback(playerData: PlayerData) {
    setPlayerTwo(playerData);
  }

  function handleChangePlayerTypes(type: MatchType) {
    switch(type) {
      case MatchType.PVP_LOCAL:
        setPlayerTypes([PlayerType.HUMAN, PlayerType.HUMAN]);
        break;
      case MatchType.PVE_ALGORITM:
        setPlayerTypes([PlayerType.HUMAN, PlayerType.COMPUTER]);
        break;
      case MatchType.EVE_ALGORITM:
        setPlayerTypes([PlayerType.COMPUTER, PlayerType.COMPUTER]);
        break;
    }
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
      <PlayerInput
        playerType={playerTypes[0]}
        playerOneFirst={playerOneFirst} 
        setPlayerOneFirst={setPlayerOneFirst} 
        playerCallback={playerOneInputCallback}
      />
      <PlayerInput
        playerType={playerTypes[1]}
        playerOneFirst={!playerOneFirst} 
        setPlayerOneFirst={setPlayerOneFirst} 
        playerCallback={playerTwoInputCallback} 
        reversed
      />
    </div>
    <Select value={matchType} className="match-type-select" onChange={(e: any) => {
      setMatchType(e.target.value);
      handleChangePlayerTypes(Number(e.target.value));
    }}>
      <option value="0">Player vs Player</option>
      <option value="2">Player vs Computer</option>
      <option value="3">Computer vs Computer</option>
    </Select>
    <div className="button-container">
      <Button hover={hoverSound} click={clickSound} onClick={handleCreateMatch}>Start</Button>
    </div>
  </div>
}