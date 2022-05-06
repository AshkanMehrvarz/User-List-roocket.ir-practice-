import React, { useState, useEffect } from "react";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [newUserData, setNewUserData] = useState({});
  const addNewUser = () => {
    setDatas([...datas, newUserData]);
  };

  return (
    <div>
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
      {datas.map((item, index) => {
        return Object.keys(item).map((objectKey) => (
          <div key={objectKey}>
            <table>
              <thead>
                <tr>
                  <th>{objectKey}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item[objectKey]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ));
      })}
    </div>
  );
}
