import { useState, useEffect} from 'react';
import { Select } from './Select';

import { X, Circle } from 'styled-icons/feather';
import { Random } from '@styled-icons/fa-solid';

import { randomName } from '../utils/randomName';
import { PlayerData } from '../pages/LocalRegister';
import { PlayerType } from '../enum/PlayerType';

import '../styles/player-input.scss';

interface PlayerInputProps {
  playerOneFirst: boolean;
  reversed: boolean;
  playerType: PlayerType;
  setPlayerOneFirst: Function;
  playerCallback: (playerData: PlayerData) => void;
}

export const PlayerInput: React.FC<PlayerInputProps | any> = ({
  playerOneFirst, 
  setPlayerOneFirst, 
  playerType, 
  reversed = false, 
  playerCallback
}) => {
  const [sprite, setSprite] = useState('bottts');
  const [nickname, setNickname] = useState('');
  const [url, setUrl] = useState(`https://avatars.dicebear.com/api/${sprite}/${nickname}.svg`);

  const sprites = ['male', 'female', 'human', 'identicon', 'initials', 'bottts', 'avataaars', 'jdenticon', 'gridy', 'micah']

  useEffect(() => {
    setUrl(`https://avatars.dicebear.com/api/${sprite}/${nickname}.svg`);
  }, [sprite, nickname])

  function handleChangeFirst(rev: boolean) {
    if(!rev)
      setPlayerOneFirst(true);
    else
      setPlayerOneFirst(false);
  }

  function handleRenderType() {
    let type = 'Player';
    switch(playerType) {
      case PlayerType.COMPUTER:
        type = 'COM';
        break;
      case PlayerType.HUMAN:
        type = 'PLAYER';
        break;
    }

    return type;
  }

  return <div className="player-input">
    <span className="player-type-container">
      {handleRenderType()}
    </span>
    <div className="piece-container">
      <X className={`${playerOneFirst && 'selected'}`} onClick={() => handleChangeFirst(reversed)}/>
      <Circle className={`circle ${!playerOneFirst && 'selected'}`} onClick={() => handleChangeFirst(!reversed)}/>
    </div>
    <img src={url} alt="User Avatar" />
    <div className="input-container">
      <Select value={sprite} onChange={(e: any) => {
        setSprite(e.target.value)
        playerCallback({
          nickname,
          sprite
        });
      }}>
        {sprites.map(sprite => <option key={sprite} value={sprite}>{sprite}</option>)}
      </Select>
      <div>
        <input 
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            playerCallback({
              nickname,
              sprite
            });
          }}
          placeholder='Nickname'
        />
        <Random className="random" onClick={() => {
          const name = randomName();
          setNickname(name);
          playerCallback({
            nickname: name,
            sprite
          });
        }}/>
      </div>
    </div>
  </div>
}