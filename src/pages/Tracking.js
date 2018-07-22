import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { LocaleProvider, DatePicker, message } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';


import '../App.css';



// Import redux provider
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }




  render() {
    return (
      <div>
        Hello this is Kevin    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default Home;
