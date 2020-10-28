import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const BannedList = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openHandler = () => {
    setModalIsOpen(true);
  };

  const closeHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="modal">
      <button className="open-modal" onClick={openHandler}>
        Open banned list
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeHandler}
        style={{
          overlay: {
            // backgroundColor: 'grey',
          },
          content: {
            backgroundColor: '#ffebcd',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
            height: '80%',
          },
        }}
      >
        <h2>Banned list</h2>
        <button className="close-modal" onClick={closeHandler}>
          Close list
        </button>
      </Modal>
    </div>
  );
};

export default BannedList;
