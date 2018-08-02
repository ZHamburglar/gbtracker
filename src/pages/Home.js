import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { GridLoader } from "react-spinners";

// import ip from 'ip';
// import geoip from 'geoip-lite';
import publicIp from 'public-ip';


import '../App.css';

import SearchBar from '../components/SearchBar';
import GunSearchTable from '../components/GunSearchTable';

class Home extends Component {

  renderCardTable() {
    const yourIP = publicIp.v4()
    publicIp.v4().then(ip => {
      this.props.changeIpAddress(ip)

    });
    console.log(this.props)

    if (this.props.loading === true ){
      return (
        <div style={loadingIconPosition} className="d-flex justify-content-center">
          <GridLoader color={"#f2b632"} />
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

const mapStateToProps = ({ searchReducer,   ipaddressReducer}) => {
  const { gList, loading, searchItem } = searchReducer
  const { ipAddress } = ipaddressReducer
  return { gList, loading, searchItem, ipAddress }
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

const testCSS = {
  zIndex: 2
}

export default connect(mapStateToProps, actions)(Home);

