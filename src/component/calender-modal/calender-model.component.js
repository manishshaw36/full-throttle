import React from "react";
import Modal from '../modal/modal.component';
import Calender from '../calender-schedular/calender-schedular.component';

export default function CalenderModal(props) {
    const { isModal, closeModal, member } = props;
    return (
        <Modal open={isModal} handleClose={closeModal} className="w-100">
            <div className="p-3 bg-white w-100">
            <h2 className="text-center mb-3">Calender</h2>
            <Calender member={member}/>
            <div className="w-25 mx-auto">
                <button className="btn btn-danger text-center w-100 mt-3" onClick={closeModal}> Close </button>
            </div>
            </div>
        </Modal>
    )
}