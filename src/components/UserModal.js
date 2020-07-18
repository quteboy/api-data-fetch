import React from 'react';
import Modal from "react-modal"
//used array dependency you can go with others
import './modal.css' //use your styles.css after troubleshooting
//array destructuring
const UserModal =  ({ isOpen, onRequestClose }) =>
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose} //closes modal
    contentLabel="Modal"
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close'
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close'
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    {/* use map method to map data on modal */}
    <h1>i'm a modal</h1>
    <p>------M-o-d-a-l-------</p>
    <br></br>
    
    <button onClick={onRequestClose}>Close</button>
  </Modal>
export default UserModal ;