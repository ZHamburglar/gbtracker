import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


// import { makeData } from "./Utils";
import * as actions from '../actions';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import ReactModal from 'react-modal';

import RemovalModal from './RemovalModal';

// import "./index.css";


class GunTrackingTable extends Component {

    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }



  render() {
    const { trackingList } = this.props;
    console.log("these props", this.props, trackingList)
    

    return (
      <div>
        <RemovalModal />
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
                },
                {
                    Header: "Remove",
                    Cell: (row) => {
                        console.log("huh", row.original)
                      return <div><Button onClick={this.handleOpenModal}>Remove</Button></div>
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
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Remove Item from Tracking?"
           className="Modal"
           overlayClassName="Overlay"
           closeTimeoutMS={200}

        >
          <p>This is where we set up the modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = ({ trackitemReducer }) => {
  const { trackingList } = trackitemReducer
  return { trackingList }
}

export default connect(mapStateToProps, actions)(GunTrackingTable);