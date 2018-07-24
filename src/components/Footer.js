import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: '',
        };
      }


      render() {
        const currentYear = moment().format("YYYY");
        return (
            <div className="footerText">
                Bear Mobile
                &copy; 2018 - {currentYear}
            </div>
        );
      }

}

export default Footer;