import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import '../App.css';

class NavigationBar extends Component {
      render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            GBTracker
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem 
                        eventKey={1} 
                        onClick={(e) => this.props.changePageHome(e)}>
                        Home
                        </NavItem>
                        <NavItem 
                            eventKey={2} 
                            onClick={(e) => this.props.changePageTracking(e)}>
                        Tracking
                        </NavItem>
                        <NavItem 
                            eventKey={2} 
                            onClick={(e) => this.props.changePageHistory(e)}>
                        Historical Prices
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
      }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    changePageHome: () => push('/'),
    changePageTracking: () => push('/track'),
    changePageHistory: () => push('/graph')
  }, dispatch)

export default connect(null, mapDispatchToProps)(NavigationBar);