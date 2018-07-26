import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import * as actions from '../actions';
import { GridLoader } from "react-spinners";

// import moment from 'moment';

import '../App.css';

import SearchBar from '../components/SearchBar';
import GunSearchTable from '../components/GunSearchTable';
import GunTrackingTable from '../components/GunTrackingTable';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  renderCardTable() {
    console.log("this works here")
    if (this.props.loading === true ){
      return (
        <div className="d-flex justify-content-center">
          <GridLoader color={"#228B22"} />
        </div>
      )
    } else if (this.props.loading === false && this.props.gList.pageIndex > 0 ){
      console.log("results" ,this.props.gList.results.length)
      return (
        <div> 
          <GunSearchTable />
        </div>
      )
    } else {
      return (
        <div>
          <GunSearchTable />
        </div>
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
