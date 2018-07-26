import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import HistoryGraph from './pages/HistoryGraph';

import NavigationBar from './components/Navbar';

import Footer from './components/Footer';

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
        <div className="footerContainer">
          <div className="footerPosition">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
