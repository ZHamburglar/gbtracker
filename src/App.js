import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import HistoryGraph from './pages/HistoryGraph';
import About from './pages/About';
import Settings from './pages/Settings';
import Share from './pages/Share';


import NavigationBar from './components/Navbar';

import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div style={pageLayout}>
        
        <NavigationBar/>
        <div>
          <main style={mainPageStyle}>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/track" component={Tracking} />
              <Route path="/graph" component={HistoryGraph} />
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
              <Route path="/share" component={Share} />
            </div>
          </main>
          <div style={pageLayout}>
            <div className="footerPosition">
              <Footer/>
            </div>
          </div>
        </div>
        


      </div>
    );
  }
}

const mainPageStyle = {
  margin: '25px',
};

const pageLayout = {
  backgroundColor: '#b5b5b7'
}

const zChange = {
  zIndex: 2
}


export default App;
