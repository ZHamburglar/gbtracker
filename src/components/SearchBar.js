import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';

import { Input } from 'antd';

import * as actions from '../actions';




import '../App.css';

const Search = Input.Search;



// Import redux provider

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }



  inputChange = (text) => {
    // this.props.searchChange(value)
      console.log("this is the new value: ", text)
      this.setState({value: text})
      console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <div>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => this.inputChange(value)}
            />
        </div>      
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actions)(SearchBar);