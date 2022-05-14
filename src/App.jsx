import React, { useState } from "react";
import Modal from "react-modal";

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [users, setUsers] = useState([]);

  const formDatasHandler = (e) => {
    e.preventDefault();

    setUsers([
      ...users,
      {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
      },
    ]);

    setModalStatus(!modalStatus);
  };

  return (
    <>
      <h1>Users List</h1>
      <button onClick={() => setModalStatus(!modalStatus)}>Add User</button>

      <Modal isOpen={modalStatus}>
        <button onClick={() => setModalStatus(!modalStatus)}>Close</button>
        <form onSubmit={formDatasHandler}>
          <label>Full Name</label>
          <input type='text' name='fullName' placeholder='Full Name' />

          <label>Email</label>
          <input type='text' name='email' placeholder='Email' />

          <label>Phone Number</label>
          <input type='text' name='phoneNumber' placeholder='Phone Number' />

          <button>Add User</button>
        </form>
      </Modal>

      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
