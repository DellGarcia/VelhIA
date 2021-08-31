import { useState, useEffect} from 'react';
import { Select } from './Select';

import { X, Circle } from 'styled-icons/feather';
import { DiceSix } from '@styled-icons/fa-solid';

import { randomName } from '../utils/randomName';
import { PlayerData } from '../pages/Register';

import '../styles/player-input.scss';

interface PlayerInputProps {
  playerOneFirst: boolean;
  reversed: boolean;
  setPlayerOneFirst: Function;
  playerCallback: (playerData: PlayerData) => void;
}

export const PlayerInput: React.FC<PlayerInputProps | any> = ({playerOneFirst, setPlayerOneFirst, reversed = false, playerCallback}) => {
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

  return <div className="player-input">
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
        <DiceSix className="dice" onClick={() => {
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