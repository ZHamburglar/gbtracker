import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';


// import { makeData } from "./Utils";
import * as actions from '../actions';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./index.css";


class GunSearchTable extends Component {

  render() {
    const { gList } = this.props;
    console.log("these props", this.props, gList)
    

    return (
      <div>
        <ReactTable
          data={gList.results}
          columns={[
            {
              Header: "Search List",
              columns: [
                {
                  Header: "Card Name",
                  accessor: "title"
                },
                {
                  Header: "Price",
                  accessor: "price"
                },
                {
                  Header: "Bids",
                  accessor: "bids"
                },
                {
                    Header: "Status",
                    Cell: (row) => {
                        console.log("huh", row.original)
                      return <div>{row.original.seller.feedbackRating} {row.original.seller.username}</div>
                    },
                  id: "status"
                },
                {
                    Header: "Status",
                    Cell: (row) => {
                        console.log("huh", row.original)
                      return <div><img height={50} src={row.original.thumbnailURL}/></div>
                    },
                  id: "status"
                },
                {
                    Header: "Time Left",
                    accessor: "endingDate"
                },
                {
                    Header: "Track",
                    Cell: (row) => {
                        console.log("huh", row.original)
                      return <div><Button onClick={()=> this.props.addItemTrack(row.original)}>Click Me</Button></div>
                    },
                  id: "status"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "name",
              desc: false
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ searchReducer, trackitemReducer }) => {
    const { gList } = searchReducer
    const { trackingList } = trackitemReducer
    return { gList, trackingList }
  }

export default connect(mapStateToProps, actions)(GunSearchTable);