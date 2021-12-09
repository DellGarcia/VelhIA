import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/global.scss';

import { Welcome } from './pages/Welcome';
import { Loading } from './pages/Loading';
import { LocalMatch } from './pages/LocalMatch';
import { LocalRegister } from './pages/LocalRegister';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Welcome} exact/>
        <Route path="/create/local" component={LocalRegister} />
        <Route path="/wait" component={Loading}/>
        <Route path="/match/local" component={LocalMatch}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
