import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import '../App.css';



// Import redux provider
import { connect } from 'react-redux';

class Main extends Component {

  render() {
    return (
      <div className="container">
        Hello this is Kevin
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default Main;
