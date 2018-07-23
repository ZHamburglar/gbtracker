import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import * as actions from '../actions';






class HistoryGraph extends Component {
  render() {
    return (
        <div>
            Graph Page
        </div>
    );
  }
}


const mapStateToProps = ({ searchReducer }) => {
  const { gList, loading, searchItem } = searchReducer
  return { gList, loading, searchItem }
}

export default connect(mapStateToProps, actions)(HistoryGraph);
