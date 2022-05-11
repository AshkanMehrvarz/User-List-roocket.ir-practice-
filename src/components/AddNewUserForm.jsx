import { useState } from "react";

export default function AddNewUserForm() {
  // Manage New User Datas By State
  const [newUser, setNewUser] = useState();

  //   Handling When "Add User" Button Clicked [ handling NewUser]
  const newUserDatasHandler = (e) => {
    //   Cancel Reloading Page
    e.preventDefault();

    // Setting Basc Varables
    const event = e.target;

    const fullNameInput = event.fullName;
    const emailInput = event.email;
    const phoneNumberInput = event.phoneNumber;

    const fullNameValue = event.fullName.value;
    const emailValue = event.email.value;
    const phoneNumberValue = event.phoneNumber.value;

    const isAdmin = event.role.checked;

    // Inputs Validation
    if (
      fullNameValue.length > 1 ||
      emailValue.length > 1 ||
      phoneNumberValue.length > 1
    ) {
      // Add New User Datas To Our State
      setNewUser({
        fullNameInput: fullNameValue,
        emailInput: emailValue,
        phoneNumberInput: phoneNumberValue,
        Role: isAdmin ? "Admin" : "Normal User",
      });
    }
  };

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
        <input type='checkbox' name='role' id='admin' />

        <button>Add User</button>
      </form>
    </>
  );
}
