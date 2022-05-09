import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [newUserData, setNewUserData] = useState({});
  const [inputValue, setInputValue] = useState();
  const addNewUser = () => {
    Object.keys(newUserData).length !== 0
      ? setDatas([...datas, newUserData])
      : null;
    setNewUserData({});
    setInputValue("");
    setTimeout(() => {
      setInputValue();
    }, 10);
  };

  return (
    <div>
      <div className='MainInputDiv'>
        {[
          "FirstName",
          "LastName",
          "Email",
          "Address",
          "Age",
          "City",
          "Admin",
          "Role",
        ].map((item, index) => {
          return (
            <input
              key={index}
              type='text'
              placeholder={item}
              value={inputValue}
              onChange={(e) =>
                setNewUserData({
                  ...newUserData,
                  id: datas.length,
                  [item]: e.target.value,
                  Time: new Date().toLocaleString(),
                })
              }
            />
          );
        })}
        <button onClick={addNewUser}>Add</button>
      </div>
      {datas.map((item) => {
        return (
          <div className='TableDiv'>
            <div className='Datas'>
              {Object.keys(item).map((objectKey) => (
                <div key={objectKey} className='Table'>
                  <p className='TableTitle'>{objectKey}</p>
                  <p className='TableItem'>{item[objectKey]}</p>
                </div>
              ))}
            </div>
            <div className='Buttons'>
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
