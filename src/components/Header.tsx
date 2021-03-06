import React from 'react';
import { Scoreboard } from './Scoreboard';
import { Circle } from '@styled-icons/feather';

import '../styles/header.scss';

export function Header() {
  return (
    <header className="velhia-header">
      <div>
        <Scoreboard icon='x' score={0}/>
      </div>
      <div className="turn">
        Vez do {
          //<X className="x-icon"/>
          <Circle className="circle-icon"/>
        }
      </div>
    </header>
  )
}