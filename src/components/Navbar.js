import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

import { Menu, Icon } from 'antd';
import '../App.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;




class Navbar extends Component {
    state = {
        current: 'mail',
      }
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    



      render() {
        return (
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />
              <Link to="/">Tracking</Link>

            </Menu.Item>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Historical</a>
            </Menu.Item>
            
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        );
      }
}


export default Navbar;