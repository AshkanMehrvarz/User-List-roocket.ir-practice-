import Modal from "react-modal";

function ModalFormAddUser({ show, resetValue }) {

  return (
    <Modal isOpen={show}>
      <div>
        <h2>hoiii</h2>
        <button onClick={() => resetValue(false)}>Close</button>
      </div>
    </Modal>
  );
}

export default ModalFormAddUser;
