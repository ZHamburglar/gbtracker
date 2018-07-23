import React, { Component } from 'react';
// import { Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
// import { LocaleProvider, DatePicker, message } from 'antd';

import GunTrackingTable from '../components/GunTrackingTable';



import '../App.css';



// Import redux provider
// import { connect } from 'react-redux';

class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }




  render() {
    return (
      <div>
        <GunTrackingTable /> 
      </div>
    );
  }
}


export default Tracking;
