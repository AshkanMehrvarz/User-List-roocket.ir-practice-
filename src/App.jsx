import React, { useState, useEffect } from "react";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [newUserData, setNewUserData] = useState({});
  const addNewUser = () => {
    setDatas([...datas, newUserData]);
  };
  useEffect(() => {
    if (datas.length > 0) {
      console.log(datas);
    }
  }, [datas]);

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
    </div>
  );
}
