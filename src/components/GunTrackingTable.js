import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


// import { makeData } from "./Utils";
import * as actions from '../actions';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./index.css";


class GunTrackingTable extends Component {

  render() {
    const { trackingList } = this.props;
    console.log("these props", this.props, trackingList)
    

    return (
      <div>
        <ReactTable
          data={trackingList}
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
                        // console.log("huh", row.original)
                      return <div>{row.original.seller.feedbackRating} {row.original.seller.username}</div>
                    },
                  id: "status"
                },
                {
                    Header: "Status",
                    Cell: (row) => {
                        // console.log("huh", row.original)
                      return <div><img height={50} src={row.original.thumbnailURL} alt={row.original.title}/></div>
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
                      return <div><Button onClick={()=> console.log('clicked', row.original)}>Update</Button></div>
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

const mapStateToProps = ({ trackitemReducer }) => {
  const { trackingList } = trackitemReducer
  return { trackingList }
}

export default connect(mapStateToProps, actions)(GunTrackingTable);