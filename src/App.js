import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import HistoryGraph from './pages/HistoryGraph';

import NavigationBar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
    
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/track" component={Tracking} />
          <Route path="/graph" component={HistoryGraph} />

        </main>
      </div>
    );
  }
}

export default App;
