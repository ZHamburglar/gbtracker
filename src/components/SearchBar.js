import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, FormControl, Button, Form } from 'react-bootstrap';

import * as actions from '../actions';

import '../App.css';


// Import redux provider

class SearchBar extends Component {
  // When you press enter in the input field it will initiate the search without refreshing the page.
  handleEnter = (e) => {
    e.preventDefault();  
    this.props.searchSubmit(this.props.searchItem)
  }

  // Calls the redux action to search for the searchItem.
  handleSubmit = () => {
    const { searchItem } = this.props
    // console.log("this was submitted", this.props, searchItem)
    this.props.searchSubmit(searchItem)
  }

  // This function handles the input then adds it to the reducer to store
  handleChange = (e)=> {
    this.setState({ value: e.target.value }, ()=>{console.log("this is form: ", this.state.value)});
    // console.log("props: ", this.props)
    this.props.searchChange(e.target.value)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleEnter} inline>
            <FormGroup controlId="formInlineName">
                <FormControl 
                    type="text" 
                    value={this.props.searchItem}
                    placeholder="Enter Item Here" 
                    onChange={value => this.handleChange(value)}
                    />
            </FormGroup>{' '}
            <Button 
                onClick={this.handleSubmit}
                >Search
            </Button>
        </Form>
    </div>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
    const { searchItem, gList } = searchReducer
    return { searchItem, gList }
}

export default connect(mapStateToProps, actions)(SearchBar);