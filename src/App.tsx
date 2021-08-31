import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.scss';

import { Welcome } from './pages/Welcome';
import { Loading } from './pages/Loading';
import { MatchPage } from './pages/MatchPage';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Welcome} exact/>
        <Route path="/create" component={Register} />
        <Route path="/wait" component={Loading}/>
        <Route path="/match" component={MatchPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
