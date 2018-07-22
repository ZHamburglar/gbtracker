import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';

import { Input } from 'antd';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

import * as actions from '../actions';




import '../App.css';
import { searchChange } from '../actions';

const Search = Input.Search;



// Import redux provider

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'wooooo',
    };
  }



  inputChange = (text) => {
    // this.props.searchChange(value)
      console.log("this is the new value: ", text)
      this.setState({value: text})
      console.log(this.state.value)
  }

  consoleValue(){
      console.log(this.state.value)
  }

  handleChange = (e)=> {
    this.setState({ value: e.target.value }, ()=>{console.log("this is form: ", this.state.value)});
    console.log("props: ", this.props)
    this.props.searchChange(e.target.value)


  }

  render() {
    return (
      <div>
        <Form inline>
            <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>{'  '}
                <FormControl 
                    type="text" 
                    value={this.props.searchReducer.searchItem}
                    placeholder="Enter Term Here" 
                    onChange={value => this.handleChange(value)}
                    />
            </FormGroup>{' '}
            <Button type="submit">Send invitation</Button>
        </Form>
    </div>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
    return { searchReducer}
}

export default connect(mapStateToProps, actions)(SearchBar);