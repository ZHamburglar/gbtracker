import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/icomoon/menu';
import {twitter} from 'react-icons-kit/icomoon/twitter';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

import '../App.css';

class NavigationBar extends Component {
      render() {
        return (
            <div>
                <Navbar style={navBarStyle}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            GBTracker
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav style={menuItemStyle} >
                        <NavItem 
                        eventKey={1}
                        style={menuItemStyle} 
                        onClick={(e) => this.props.changePageHome(e)}>
                            <span style={menuItemStyle}>HOME</span>
                        </NavItem>
                        <NavItem 
                            eventKey={2} 
                            style={menuItemStyle} 
                            onClick={(e) => this.props.changePageTracking(e)}>
                            <span style={menuItemStyle}>TRACKING</span>
                        </NavItem>
                        <NavItem 
                            eventKey={2}
                            style={menuItemStyle}  
                            onClick={(e) => this.props.changePageHistory(e)}>
                            <span style={menuItemStyle}>HISTORICAL PRICES</span>
                        </NavItem>
                    </Nav>
                    <Nav pullRight style={menuItemStyle}>
                        <NavDropdown 
                            eventKey={3} 
                            noCaret
                            
                            title={
                                <div className="pull-left">
                                    <Icon icon={menu} style={menuItemStyle} />
                                </div>
                            } 
                            id="basic-nav-dropdown">
                            <MenuItem 
                                eventKey={3.1}
                                onClick={(e) => this.props.changePageShare(e)}>
                                Share
                            </MenuItem>
                            <MenuItem 
                                eventKey={3.2} onClick={(e) => this.props.changePageSettings(e)}>
                                Settings
                            </MenuItem>
                            <MenuItem 
                                eventKey={3.3} onClick={(e) => this.props.changePageAbout(e)}>
                                About
                            </MenuItem>
                            <MenuItem 
                                eventKey={3.3} 
                                onClick={(e) => this.props.changePageGBTwitter(e)}>
                                @GBTracker on <Icon icon={twitter} />
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
      }
}

const navBarStyle = {
    backgroundColor: '#252839'
}

const menuItemStyle = {
    color: '#f2b632',
    backgroundColor: '#252839'
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePageHome: () => push('/'),
    changePageTracking: () => push('/track'),
    changePageHistory: () => push('/graph'),
    changePageGBTwitter: () => push('https://twitter.com/gb_tracker'),
    changePageAbout: () => push('/about'),
    changePageSettings: () => push('/settings'),
    changePageShare: () => push('/share')

  }, dispatch)

export default connect(null, mapDispatchToProps)(NavigationBar);