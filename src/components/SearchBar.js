import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';

import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

import * as actions from '../actions';

import '../App.css';


// Import redux provider

class SearchBar extends Component {

  handleSubmit = () => {
    const { searchItem } = this.props
    console.log("this was submitted", this.props, searchItem)
    this.props.searchSubmit(this.props.searchItem)
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
                    value={this.props.searchItem}
                    placeholder="Enter Term Here" 
                    onChange={value => this.handleChange(value)}
                    />
            </FormGroup>{' '}
            <Button 
                onClick={this.handleSubmit}
                >Send invitation
            </Button>
        </Form>
    </div>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
    const { searchItem } = searchReducer
    return { searchItem }
}

export default connect(mapStateToProps, actions)(SearchBar);