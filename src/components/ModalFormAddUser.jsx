import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function ModalFormAddUser({ show, resetValue }) {
  const [ModalStatus, setModalStatus] = useState();

  useEffect(() => {
    if (show) {
      setModalStatus(true);
      resetValue(false);
    }
  });

  return (
    <Modal isOpen={ModalStatus}>
      <div>
        <h2>hoiii</h2>
        <button onClick={() => setModalStatus(!ModalStatus)}>Close</button>
      </div>
    </Modal>
  );
}

export default ModalFormAddUser;
