import React, { Component } from 'react';
import './App.css';
import TopNav  from './components/topNav/topNav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav/>
        {/* <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product_details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch> */}
      </React.Fragment>
    );
  }
}

export default App;
