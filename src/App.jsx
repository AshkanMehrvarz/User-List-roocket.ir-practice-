import React, { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [input, setInput] = useState();
  const addUser = () => {
    setUsers([...users, user]);
    setInput("");
  };
  return (
    <div>
      <input
        value={input}
        type='text'
        placeholder='First Name'
        onChange={(e) => setUser({ ...user, FirstName: e.target.value })}
      />
      <input
        value={input}
        type='text'
        placeholder='Last Name'
        onChange={(e) => setUser({ ...user, LastName: e.target.value })}
      />
      <input
        value={input}
        type='number'
        placeholder='Age'
        onChange={(e) => setUser({ ...user, Age: e.target.value })}
      />
      <input
        value={input}
        type='text'
        placeholder='City'
        onChange={(e) => setUser({ ...user, City: e.target.value })}
      />
      <input
        value={input}
        type='email'
        placeholder='Email'
        onChange={(e) => setUser({ ...user, Email: e.target.value })}
      />
      <input
        value={input}
        type='number'
        placeholder='Phone Number'
        onChange={(e) => setUser({ ...user, PhoneNumber: e.target.value })}
      />
      <input
        value={input}
        type='text'
        placeholder='Role'
        onChange={(e) => setUser({ ...user, Role: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>
      {console.log(users)}
    </div>
  );
}
