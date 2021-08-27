import { useState, useEffect} from 'react';
import { Select } from './Select';

import { X, Circle } from 'styled-icons/feather';
import { DiceSix } from 'styled-icons/fa-solid';

import '../styles/player-input.scss';
import { randomName } from '../utils/randomName';

interface PlayerInputProps {
  playerOneFirst: boolean;
  reversed: boolean;
  setPlayerOneFirst: Function;
}

export const PlayerInput: React.FC<PlayerInputProps | any> = ({playerOneFirst, setPlayerOneFirst, reversed = false}) => {
  const [sprite, setSprite] = useState('bottts')
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
      <Select value={sprite} onChange={(e: any) => setSprite(e.target.value)}>
        {sprites.map(sprite => <option key={sprite} value={sprite}>{sprite}</option>)}
      </Select>
      <div>
        <input 
          value={nickname}
          onChange={(e) => {setNickname(e.target.value)}}
          placeholder='Nickname'
        />
        <DiceSix className="dice" onClick={() => setNickname(randomName())}/>
      </div>
    </div>
  </div>
}