import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [newUserData, setNewUserData] = useState({});
  const [inputValue, setInputValue] = useState();
  const addNewUser = () => {
    setDatas([...datas, newUserData]);
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
          "Age",
          "City",
          "Admin",
          "Role",
          "Email",
          "Address",
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
                  [item]: e.target.value,
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
            {Object.keys(item).map((objectKey) => (
              <div key={objectKey} className='Table'>
                <p className='TableTitle'>{objectKey}</p>
                <p className='TableItem'>{item[objectKey]}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
