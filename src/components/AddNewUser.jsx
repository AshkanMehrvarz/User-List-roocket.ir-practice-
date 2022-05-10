import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import AddNewUserForm from "./AddNewUserForm";

export default function AddNewUser() {
  const [modalStatus, setModalStatus] = useState(false);

  //   Handling Modal Status [ Modal Open And Close Functionality]
  const modalStatusHandler = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <>
      {/* Button For Add Open Modal To Add User */}
      <button onClick={modalStatusHandler}>Add New User</button>

      {/* Modal Section */}
      <Modal isOpen={modalStatus}>
        <div className='ModalForm'>
          {/* Modal Close Button */}
          <button onClick={modalStatusHandler}>Close</button>

          {/* Form For Adding New User */}
          <AddNewUserForm />
        </div>
      </Modal>
    </>
  );
}
