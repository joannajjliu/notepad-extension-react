import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} //converting to true Boolean
        contentLabel="Selected Option"
        onRequestClose={props.closeModal}
        ariaHideApp={false} //removing element error msg
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option:</h3>
        <p className="modal__body">{props.selectedOption}</p>
        <button
            className="button"
            onClick={props.closeModal}
        >
                Close Modal
        </button>
    </Modal>
);

export default OptionModal;