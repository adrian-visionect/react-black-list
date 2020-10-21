import React, { useState } from 'react';

function AddPeople(props) {
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputLastName, setInputLastName] = useState('');

  const handleChangeFirstName = (e) => {
    setInputFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setInputLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      firstName: inputFirstName,
      lastName: inputLastName,
    });
    setInputFirstName('');
    setInputLastName('');
  };
  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          value={inputFirstName}
          onChange={handleChangeFirstName}
          placeholder="First Name"
          className="add-input"
        ></input>
        <input
          name="text"
          value={inputLastName}
          placeholder="Last Name"
          onChange={handleChangeLastName}
          className="add-input"
        ></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default AddPeople;
