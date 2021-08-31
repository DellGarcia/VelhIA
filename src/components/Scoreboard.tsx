import { Circle, X } from '@styled-icons/feather';

import '../styles/scoreboard.scss';

type ScoreboardProps = {
  icon: String;
  score: Number;
}

export const Scoreboard:React.FC<ScoreboardProps> = ({icon, score}) => {
  return (
    <span className="scoreboard-container">
      {icon === 'x' ? <X className="x-icon"/> : <Circle className="circle-icon"/>}
      {score}
    </span>
  );
}