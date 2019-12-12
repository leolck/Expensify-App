import React from 'react';
import Modal from 'react-modal';

const RemoveModal = ({ confirmRemove, onConfirmRemove, onDenyRemove }) => {
    return (
        <Modal
            isOpen={confirmRemove}
            onRequestClose={onDenyRemove}
            contentLabel='confirmation'
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Are you sure?</h3>
            <div className="modal__buttons">
                <button 
                    className="button button--confirm"
                    onClick={onConfirmRemove}
                > 
                    Yes
                </button>
                <button
                    className="button button--deny"
                    onClick={onDenyRemove}
                >
                    No
                </button>
            </div>
        </Modal>
    );
};

export default RemoveModal;


// function OptionModal(props) {
//     return (
//         <Modal
//             isOpen={!!props.selectedOption}
//             onRequestClose={props.handleClearSelectedOption}
//             contentLabel='Selected Option'
//             closeTimeoutMS={200}
//             className="modal"
//         >
//             <h3 className='modal__title'>Selected Option</h3>
//             {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
//             <button className='button' onClick={props.handleClearSelectedOption}>Okay</button>   
//         </Modal>
//     );
// };