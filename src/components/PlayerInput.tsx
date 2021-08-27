import { useState, useEffect} from 'react';
import { Select } from './Select';
import { X, Circle } from 'styled-icons/feather';

import '../styles/player-input.scss';

interface PlayerInputProps extends HTMLDivElement {
  playerOneFirst: boolean;
  setPlayerOneFirst: Function;
}

export const PlayerInput: React.FC<PlayerInputProps | any> = ({playerOneFirst, setPlayerOneFirst}, props) => {
  const [sprite, setSprite] = useState('bottts')
  const [nickname, setNickname] = useState('');
  const [url, setUrl] = useState(`https://avatars.dicebear.com/api/${sprite}/${nickname}.svg`);

  const sprites = ['male', 'female', 'human', 'identicon', 'initials', 'bottts', 'avataaars', 'jdenticon', 'gridy', 'micah']

  useEffect(() => {
    setUrl(`https://avatars.dicebear.com/api/${sprite}/${nickname}.svg`);
  }, [sprite, nickname])

  return <div className="player-input" {...props}>
    <div className="piece-container">
      <X className={`${playerOneFirst && 'selected'}`} onClick={() => {
        if(!playerOneFirst)
          setPlayerOneFirst(!playerOneFirst);
      }}/>
      <Circle className={`circle ${!playerOneFirst && 'selected'}`} onClick={() => {
        if(playerOneFirst)
          setPlayerOneFirst(!playerOneFirst);
      }}/>
    </div>
    <img src={url} alt="User Avatar" />
    <div className="input-container">
      <Select value={sprite} onChange={(e: any) => setSprite(e.target.value)}>
        {sprites.map(sprite => <option key={sprite} value={sprite}>{sprite}</option>)}
      </Select>
      <input 
        value={nickname}
        onChange={(e) => {setNickname(e.target.value)}}
        placeholder='Nickname'
      />
    </div>
  </div>
}