import '../styles/select.scss';

export const Select: React.FC<HTMLSelectElement | any> = (props) => {
  return <select {...props}>
    {props.children}
  </select>
}