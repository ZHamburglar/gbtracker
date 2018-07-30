import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/icomoon/menu'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

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
                    <Nav pullRight>
                        <NavDropdown 
                            eventKey={3} 
                            noCaret
                            
                            title={
                                <div className="pull-left">
                                    <Icon icon={menu} />
                                </div>
                            } 
                            id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
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