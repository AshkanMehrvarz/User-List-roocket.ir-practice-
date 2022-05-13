import React, { useEffect, useState } from "react";
import ModalFormAddUser from "./ModalFormAddUser";

function Header() {
  const [showModalStatus, setShowModalStatus] = useState(false);
  return (
    <>
      <h1>Users List</h1>
      <button onClick={() => setShowModalStatus(true)}>Add User</button>

      <ModalFormAddUser
        show={showModalStatus}
        resetValue={setShowModalStatus}
      />
    </>
  );
}

export default Header;
