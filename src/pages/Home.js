import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import * as actions from '../actions';


// import moment from 'moment';


import '../App.css';

import SearchBar from '../components/SearchBar';




// Import redux provider

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  renderCardTable() {
    console.log("this works here", this.props.cards.length)
    if (this.props.loading == true ){
      return (
        <div> This is Loading</div>
      )
    } else if (this.props.loading == false){
      return (
        <div> NOT LOADING</div>
      )
    }
  }




  render() {
    return (
      <div>
        <div>
          <SearchBar />

        </div>     
        <div>
        {this.renderCardTable()}

        </div> 
    </div>
    );
  }
}


const mapStateToProps = ({ searchReducer }) => {
  const { gList, loading, searchItem } = searchReducer
  return { gList, loading, searchItem }
}

export default connect(mapStateToProps, actions)(Home);
