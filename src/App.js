import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Home from './containers/Home';
import asynComponent from './hoc/asyncComponent';
const AsyncPizza = asynComponent(() => {
  return import('./containers/Pizza');
});

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link> | <Link to ='/pizza'>Pizza</Link>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pizza' component={AsyncPizza} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;