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
    // console.log ("height of stuff ", this.state)
  }

  // componentDidMount() {
  //   window.addEventListener("resize", this.calculateMainHeight());
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.calculateMainHeight());
  // }

  componentDidUpdate() {
    // console.log('boo nah?')
    this.calculateMainHeight()
  }

    calculateMainHeight = () => {
      if (this.refs.footer && this.refs.mainarea && this.refs.navbar){
        return {
          margin: '25px',
          minHeight: (window.innerHeight - this.refs.footer.clientHeight - this.refs.navbar.clientHeight)
        }
      } else {
        return {
          margin: '25px',
          minHeight: window.innerHeight
        }
      }
    }
  
    

  render() {
    

    const windowPanel = window.innerHeight;
    // console.log("window Panel: ",windowPanel, window)
    
    return (
      <div style={pageLayout}>
        <div ref='navbar'>
          <NavigationBar/>
        </div>
        <div>
          <main style={this.calculateMainHeight()}>
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



const pageLayout = {
  backgroundColor: '#b5b5b7'
}

const zChange = {
  zIndex: 2
}


export default App;
