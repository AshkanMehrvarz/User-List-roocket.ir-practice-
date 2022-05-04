import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const addUser = () => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='First Name'
        onChange={(e) => setUser({ FirstName: e.target.value })}
      />
      <input type='text' placeholder='Last Name' />
      <input type='number' placeholder='Age' />
      <input type='text' placeholder='City' />
      <input type='email' placeholder='Email' />
      <input type='number' placeholder='Phone Number' />
      <input type='text' placeholder='Role' />
      <button onClick={addUser}>Add User</button>
      {console.log(users)}
    </div>
  );
}
