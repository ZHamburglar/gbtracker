import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

// import { makeData } from "./Utils";
import * as actions from '../actions';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class GunSearchTable extends Component {

  render() {
    const { gList } = this.props;
    
    return (
      <div style={tableBackground}>
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
                        // console.log("huh", row.original)
                      return <div><Button onClick={()=> this.props.addItemTrack(row.original)}>Track This Item</Button></div>
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
          defaultPageSize={20}
          className="-striped -highlight"
          SubComponent={(row) => <div style={{padding: '10px'}}>Title: {row.original.title}</div>}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
    const { gList } = searchReducer
    return { gList }
  }

const tableBackground = {
  backgroundColor: '#FFFFFF'

}

export default connect(mapStateToProps, actions)(GunSearchTable);