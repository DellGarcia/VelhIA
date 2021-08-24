import { useEffect } from 'react';
import { Match } from '../models/Match';
import axios from 'axios';

import { Scoreboard } from './Scoreboard';
import { Circle, X } from 'styled-icons/feather';

import '../styles/header.scss';

export function Header() {
  useEffect(() => {
    async function getSomething() {
      const req = {
          type: "0",
          players: [
              {
                  player: {
                      startPlaying: true
                  }
              },
              {
                  player: {
                      type: 1
                  }
              }
          ]
      }

      const res: Match = await axios.post('http://localhost:5000/api/match/create-match', req)
      console.log(res)
    }

    getSomething();
  }, [])

  return (
    <header className="velhia-header">
      <div>
        <Scoreboard icon='x' score={0}/>
        <Scoreboard icon='o' score={1}/>
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