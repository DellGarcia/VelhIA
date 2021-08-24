import '../styles/button.scss';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button>
      {props.text}
    </button>
  );
}