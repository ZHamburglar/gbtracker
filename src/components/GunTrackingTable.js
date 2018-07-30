import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import moment from 'moment';

import * as actions from '../actions';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import ReactModal from 'react-modal';

import RemovalModal from './RemovalModal';



class GunTrackingTable extends Component {

 
    
    handleOpenModal = (row) => {
      this.setState({ showModal: true });
      console.log("modal is being opened: ", row)
    }
    
    handleCloseModal = () =>{
      this.setState({ showModal: false });
    }

    handleRemoveItem = (item) => {
      this.setState({ showModal: false });
      console.log("item", item)
      this.props.removeItemTrack(item)
    }

    calculateTimeLeft = (e, time) => {
      // console.log('this is the time left', time)
    }

    momentTime = (time) => {
      let timeEnding = moment(time.endingDate).unix()
      let nowTime = moment().unix()
      let timeDifference = timeEnding - nowTime
      let timeEnd = moment.duration(timeDifference * 1000)

      console.log("time end", timeEnd, "days: ", timeEnd._data.days)
    }

  render() {
    const { trackingList, showModal } = this.props;
    // console.log("these props", this.props, trackingList)
    

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
                    Cell: (row) => {
                        // console.log("huh", row.original)
                        // return <div><Button onClick={()=> this.momentTime(row.original)}>Update</Button></div>

                        let timeEnding = moment(row.original.endingDate).unix()
                        let nowTime = moment().unix()
                        let timeDifference = timeEnding - nowTime
                        let timeEnd = moment.duration(timeDifference * 1000)
                        return <div>D: {timeEnd._data.days} H: {timeEnd._data.hours} M: {timeEnd._data.minutes} S: {timeEnd._data.seconds}</div>
                    },
                  id: "status"
                },
                {
                    Header: "Remove",
                    Cell: (row) => {
                        // console.log("huh", row.original)
                      return <div><Button onClick={() => this.props.openRemovalModal(row.original)}>Remove</Button></div>
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
        <RemovalModal 
           isOpen={this.props.showModal}
           contentLabel="Remove Item from Tracking?"
           className="Modal"
           overlayClassName="Overlay"
           closeTimeoutMS={200}
           ariaHideApp={false}
           closeModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ trackitemReducer }) => {
  const { trackingList, showModal } = trackitemReducer
  return { trackingList, showModal }
}

export default connect(mapStateToProps, actions)(GunTrackingTable);