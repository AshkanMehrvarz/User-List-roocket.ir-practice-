import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <input type='text' placeholder='First Name' />
      <input type='text' placeholder='Last Name' />
      <input type='text' placeholder='Age' />
      <input type='text' placeholder='City' />
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Phone Number' />
      <input type='text' placeholder='Role' />
      <button>Add User</button>
    </div>
  );
}
