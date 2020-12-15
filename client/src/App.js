import React from 'react';
import './App.css';
import FrontPage from './components/frontpage';
import ProductPage from './components/productpage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/shoppingcart';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default App;
