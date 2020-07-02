import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './pages/home/About';
import Home from './pages/home/Home';
import NoMatch from './common/NoMatch';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;