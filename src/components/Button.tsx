import { useSound } from 'use-sound';

import '../styles/button.scss';

interface ButtonProps extends HTMLButtonElement {
  source: any;
}

export const Button: React.FC<ButtonProps | any> = (props) => {
  const [play, { stop }] = useSound(props.source);

  return (
    <button 
      onMouseEnter={() => play()}
      onMouseLeave={() => stop()}
      {...props}
    >
      {props.children}
    </button>
  );
}