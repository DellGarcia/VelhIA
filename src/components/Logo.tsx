import { useHistory } from 'react-router-dom';
import '../styles/logo.scss';

export function Logo() {
  const history = useHistory();

  return <div className="logo" onClick={() => history.push('/')}>
    <h1>Velh<span>IA</span></h1>
  </div>
}