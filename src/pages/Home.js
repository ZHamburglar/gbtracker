import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { GridLoader } from "react-spinners";

import '../App.css';

import SearchBar from '../components/SearchBar';
import GunSearchTable from '../components/GunSearchTable';

class Home extends Component {

  renderCardTable() {
    console.log("this works here")
    if (this.props.loading === true ){
      return (
        <div style={loadingIconPosition} className="d-flex justify-content-center">
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
      <div style={mainPageStyle}>
        <div style={searchBarDivide}>
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

const mainPageStyle = {
};

const searchBarDivide = {
  marginBottom: '25px'
}

const loadingIconPosition = {
  display: 'flex', 
  justifyContent: 'center'
}

export default connect(mapStateToProps, actions)(Home);
