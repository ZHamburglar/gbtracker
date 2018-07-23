import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



import '../App.css';




class NavigationBar extends Component {
    
    

    changePageToHome(){
        this.props.changePageHome()

    }

    changePageToTracking(){
        this.props.changePageTracking()
    }

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
                        onClick={(e) => this.changePageToHome(e)}>
                        Home
                        </NavItem>
                        <NavItem 
                            eventKey={2} 
                            onClick={(e) => this.changePageToTracking(e)}>
                        Tracking
                        </NavItem>
                        <NavItem 
                            eventKey={2} 
                            onClick={(e) => this.changePageToTracking(e)}>
                        Tracking
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
      }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    changePageHome: () => push('/'),
    changePageTracking: () => push('/track')
  }, dispatch)

export default connect(null, mapDispatchToProps)(NavigationBar);