import React, { Component } from 'react';
import ReactModal from 'react-modal';
import '../App.css';



class RemovalModal extends Component {
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
        return (
            <div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Inline Styles Modal Example"
                    style={{
                        overlay: {
                        backgroundColor: 'papayawhip'
                    },
                    content: {
                        color: 'lightsteelblue'
                    }
                    }}
                >
                    <p>Modal text!</p>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>            
            </div>
            
        );
      }

}

export default RemovalModal;