import { useState } from 'react';
import { Select } from './Select';

import '../styles/player-input.scss';
import { useEffect } from 'react';

export function PlayerInput() {
  const [sprite, setSprite] = useState('bottts')
  const [nickname, setNickname] = useState('');
  const [url, setUrl] = useState(`https://avatars.dicebear.com/api/${sprite}/${nickname}.svg`);

  const sprites = ['male', 'female', 'human', 'identicon', 'initials', 'bottts', 'avataaars', 'jdenticon', 'gridy', 'micah']

  useEffect(() => {
    setUrl(`https://avatars.dicebear.com/api/${sprite}/${nickname}.svg`);
  }, [sprite, nickname])

  return <div className="player-input">
    <img src={url} alt="User Avatar" />
    <div>
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