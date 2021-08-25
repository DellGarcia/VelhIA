import '../styles/button.scss';

export const Button: React.FC<HTMLButtonElement | any> = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  );
}