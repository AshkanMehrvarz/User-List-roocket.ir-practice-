import React, { useState } from "react";
import "./style.css";
import Modal from "react-modal/lib/components/Modal";

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [datas, setDatas] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const addUserHandler = () => {
    setFirstName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAge("");
    setCity("");

    let date = new Date().toLocaleString();
    if (
      firstName ||
      lastName ||
      email ||
      phoneNumber ||
      age ||
      city ||
      isAdmin
    ) {
      setDatas([
        ...datas,
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          age,
          city,
          isAdmin,
          date,
        },
      ]);
    }
  };

  const userRemoveHandler = (index) => {
    const tempDataForRemove = [...datas];
    tempDataForRemove.splice(index, 1);
    setDatas(tempDataForRemove);
  };

  const userEditHandler = (index) => {
    setSelected(index);
    setShowModal(true);
  };

  const userUpdateHandler = () => {
    setShowModal(false);
    setFirstName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAge("");
    setCity("");
  };

  let temp;
  const updateInputHandler = (inputName, value) => {
    temp = [...datas];
    const selectedInput = temp[selected];
    selectedInput[inputName] = value;
    setDatas(temp);
  };

  return (
    <div>
      {/* Input Section */}
      <div className='Form'>
        <input
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='tel'
          placeholder='Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type='number'
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Admin</label>
        <div>
          <label htmlFor='adminYes'>Yes</label>
          <input
            type='radio'
            placeholder='Admin'
            id='adminYes'
            name='Admin'
            value={isAdmin}
            onClick={() => setIsAdmin("Admin")}
          />
          <label htmlFor='adminNo'>No</label>
          <input
            type='radio'
            placeholder='Admin'
            id='adminNo'
            name='Admin'
            value={isAdmin}
            onClick={() => setIsAdmin("Normal User")}
          />
        </div>
        <button onClick={() => addUserHandler()}>Add New User</button>
        <button onClick={() => setDatas([])}>Reset</button>
      </div>

      {/* User List Section */}
      <div>
        {datas.length > 0 && (
          <table border='1'>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Age</th>
              <th>City</th>
              <th>Role</th>
              <th>Registered Date</th>
              <th>Edit/Remove</th>
            </thead>
            <tbody>
              {datas.map((item, index) => (
                <>
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                    <td>{item.isAdmin}</td>
                    <td>{item.date}</td>
                    <button onClick={() => userEditHandler(index)}>Edit</button>
                    <button onClick={() => userRemoveHandler(index)}>
                      Remove
                    </button>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className='Modal'>
        <Modal isOpen={ShowModal}>
          <div className='Form'>
            <h2>Edit User Informations</h2>
            <input
              type='text'
              placeholder='First Name'
              value={datas[selected]?.firstName}
              onChange={(e) => updateInputHandler("firstName", e.target.value)}
            />
            <input
              type='text'
              placeholder='Last Name'
              value={datas[selected]?.lastName}
              onChange={(e) => updateInputHandler("lastName", e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              value={datas[selected]?.email}
              onChange={(e) => updateInputHandler("email", e.target.value)}
            />
            <input
              type='tel'
              placeholder='Phone Number'
              value={datas[selected]?.phoneNumber}
              onChange={(e) =>
                updateInputHandler("phoneNumber", e.target.value)
              }
            />
            <input
              type='number'
              placeholder='Age'
              value={datas[selected]?.age}
              onChange={(e) => updateInputHandler("age", e.target.value)}
            />
            <input
              type='text'
              placeholder='City'
              value={datas[selected]?.city}
              onChange={(e) => updateInputHandler("city", e.target.value)}
            />
            <label>Admin</label>
            <div>
              <label htmlFor='adminYes'>Yes</label>
              <input
                type='radio'
                placeholder='Admin'
                id='adminYes'
                name='Admin'
                value={isAdmin}
                onChange={() => {
                  temp = [...datas];
                  temp[selected].isAdmin = "Admin";
                  setDatas(temp);
                }}
              />
              <label htmlFor='adminNo'>No</label>
              <input
                type='radio'
                placeholder='Admin'
                id='adminNo'
                name='Admin'
                value={isAdmin}
                onChange={() => {
                  temp = [...datas];
                  temp[selected].isAdmin = "Normal User";
                  setDatas(temp);
                }}
              />
            </div>
            <button onClick={userUpdateHandler}>Update</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
