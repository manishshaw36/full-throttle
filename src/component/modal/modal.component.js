import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function TransitionsModal(props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={`d-flex align-items-center justify-content-center w-75 mx-auto`}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEscapeKeyDown={true}
      >
        <Fade in={props.open}>
          <div className={`modal-container ${props.className ? props.className : ''}`}>
            {props.children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}