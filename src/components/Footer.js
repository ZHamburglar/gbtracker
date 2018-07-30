import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';

class Footer extends Component {
      render() {
        const currentYear = moment().format("YYYY");
        return (
            <div style={footerText} className="footerText">
                Bear Mobile
                &copy; 2018 - {currentYear}
            </div>
        );
      }
}

const footerText = {
    display: 'flex', 
    justifyContent: 'center',
    color: '#252839'
  }


export default Footer;