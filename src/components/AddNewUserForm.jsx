import { useState } from "react";

export default function AddNewUserForm() {
  // Manage New User Datas By State
  const [newUser, setNewUser] = useState();

  //   Handling When "Add User" Button Clicked [ handling NewUser]
  const newUserDatasHandler = (e) => {
    //   Cancel Reloading Page
    e.preventDefault();
    console.log(e);

    // Setting Basc Varables
    const event = e.target;

    const fullNameInput = event.fullName;
    const emailInput = event.email;
    const phoneNumberInput = event.phoneNumber;

    const fullNameValue = event.fullName.value;
    const emailValue = event.email.value;
    const phoneNumberValue = event.phoneNumber.value;

    const isAdmin = event.role[0].checked;

    // Add New User Datas To Our State
    setNewUser({
      fullNameInput: fullNameValue,
      emailInput: emailValue,
      phoneNumberInput: phoneNumberValue,
      Role: isAdmin ? "Admin" : "Normal User",
    });
  };

  console.log(newUser);

  return (
    <>
      <form className='AddNewUserForm' onSubmit={(e) => newUserDatasHandler(e)}>
        <label>Full Name</label>
        <input type='text' name='fullName' />

        <label>Email</label>
        <input type='text' name='email' />

        <label>Phone Number</label>
        <input type='text' name='phoneNumber' />

        <label htmlFor='admin'>Admin</label>
        <input type='radio' name='role' id='admin' />

        <label htmlFor='normalUser'>Normal User</label>
        <input type='radio' name='role' id='normalUser' />

        <button>Add User</button>
      </form>
    </>
  );
}
