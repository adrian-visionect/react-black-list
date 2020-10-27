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
      <button onClick={openHandler}>Open banned list</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeHandler}>
        <h2>Banned list</h2>
        <button onClick={closeHandler}>Close list</button>
      </Modal>
    </div>
  );
};

export default BannedList;
