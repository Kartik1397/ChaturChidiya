import React from 'react';
import './App.css';
import FrontPage from './components/frontpage';
import ProductPage from './components/productpage';
import ProductDetailPage from './components/productdetail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/product/detail" component={ProductDetailPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
