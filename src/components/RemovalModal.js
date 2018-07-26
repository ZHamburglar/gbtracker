import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions'

import '../App.css';



class RemovalModal extends Component {

  
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
    
    handleCloseModal = () =>{
        this.setState({ showModal: false });
      }
  
      handleRemoveItem = (item) => {
        this.setState({ showModal: false });
  
        this.props.removeItemTrack(item)
  
  
      }

      render() {
        return (
            <div>
                <ReactModal 
                    isOpen={this.props.isOpen}
                    contentLabel="Remove Item from Tracking?"
                    className="Modal"
                    overlayClassName="Overlay"
                    closeTimeoutMS={200}
                    ariaHideApp={false}
                    >
                    <p>Do you want to stop tracking?</p>
                    <button onClick={this.handleRemoveItem}>YES</button>
                    <button onClick={this.props.closeRemovalModal}>NO</button>
                </ReactModal>         
            </div>
            
        );
      }

}

const mapStateToProps = ({ trackitemReducer }) => {
    const { trackingList, showModal } = trackitemReducer
    return { trackingList, showModal }
  }

export default connect(mapStateToProps, actions)(RemovalModal);