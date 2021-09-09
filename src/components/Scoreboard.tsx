import { Circle, X } from '@styled-icons/feather';

import '../styles/scoreboard.scss';

type ScoreboardProps = {
  icon: String;
  score: Number;
}

export const Scoreboard:React.FC<ScoreboardProps> = ({icon, score}) => {
  return (
    <div className="scoreboard-container">
      <div className="player-container">
        <span className="player">
          <img src="https://avatars.dicebear.com/api/bottts/betinho.svg" alt="betinho" />
          <p>Betinho</p>
        </span>
        <span className="score">
          <X className="x-icon"/>
          <p>{score}</p>
        </span>
      </div>

      <div className="player-container">
        <span className="player reverse">
          <img src="https://avatars.dicebear.com/api/bottts/Roberto.svg" alt="Roberto" />
          <p>Roberto</p>
        </span>
        <span className="score reverse">
          <Circle className="circle-icon"/>
          <p>{score}</p>
        </span>
      </div>
    </div>
  );
}