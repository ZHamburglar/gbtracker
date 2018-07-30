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
  constructor(props) {
    super(props);
    this.state = { 
      navHeight: '',
      mainHeight: '',
      footerHeight: ''
    };
  }

  componentDidMount() {
    this.setState({ 
      navHeight: this.refs.navbar.offsetHeight, 
      mainHeight: this.refs.mainarea.offsetHeight, 
      footerHeight: this.refs.footer.offsetHeight 
    });

    console.log ("height of stuff ", this.state)

  }

  componentDidUpdate() {
    var heightNav = this.refs.navbar.offsetHeight
    var heightMain = this.refs.mainarea.offsetHeight
    var heightFooter = this.refs.footer.offsetHeight
    // this.setState({ navHeight: heightNav, mainHeight: heightMain, footerHeight: heightFooter });

    console.log ("height of stuff ", heightFooter, heightMain, heightNav, this.state)
    }
  

  render() {
    const windowPanel = window.innerHeight;
    console.log("window Panel: ",windowPanel, window)
    
    return (
      <div style={pageLayout}>
        <div ref='navbar'>
          <NavigationBar/>
        </div>
        <div>
          <main style={mainPageStyle}>
            <div ref='mainarea'>
              <Route exact path="/" component={Home} />
              <Route path="/track" component={Tracking} />
              <Route path="/graph" component={HistoryGraph} />
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
              <Route path="/share" component={Share} />
            </div>
          </main>
          <div style={pageLayout}>
            <div className="footerPosition" ref='footer'>
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
  minHeight: window.innerHeight
};

const pageLayout = {
  backgroundColor: '#b5b5b7'
}

const zChange = {
  zIndex: 2
}


export default App;
