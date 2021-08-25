import { useSound } from 'use-sound';

import '../styles/button.scss';

interface ButtonProps extends HTMLButtonElement {
  hover: any;
  click: any;
  action: Function;
}

export const Button: React.FC<ButtonProps | any> = (props) => {
  const [play, { stop }] = useSound(props.hover);
  const [click] = useSound(props.click);

  function handleClick() {
    click();
    
    if(props.action)
      props.action();
  }

  return (
    <button 
      onMouseEnter={() => play()}
      onMouseLeave={() => stop()}
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </button>
  );
}