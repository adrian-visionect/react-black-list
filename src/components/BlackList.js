import React, { useState } from 'react';
import AddPeople from './AddPeople';
import '../../src/components/BlackList.css';
import BannedList from './BannedList';

const BlackList = (props) => {
  const [lists, setLists] = useState([]);

  const addToList = (list) => {
    if (!list.firstName || !list.lastName) {
      return;
    }
    const newLists = [list, ...lists];

    setLists(newLists);
    console.log(list, ...lists);
  };

  const removeTodo = (id) => {
    const removeArr = [...lists].filter((item) => item.id !== id);

    setLists(removeArr);
  };

  const blItems = lists.map((item, index) => {
    return (
      <div className="users">
        <li key={index}>
          <p className="user-info">
            First Name: <span>{item.firstName}</span>
          </p>
          <p className="user-info">
            Last Name: <span>{item.lastName}</span>
          </p>
          <p className="user-info">
            Blacklist ID: <span>{item.id}</span>
          </p>
        </li>
        <div className="user-remove" onClick={() => removeTodo(item.id)}>
          Remove
        </div>
      </div>
    );
  });
  return (
    <div className="blacklist">
      <h1>
        Add to <span>blacklist</span>!
      </h1>
      <AddPeople onSubmit={addToList} />
      <div className="blacklist-container">
        <div className="people-list">{blItems}</div>
        <div className="no-entry">NO ENTRY!</div>
        <BannedList />
      </div>
    </div>
  );
};

export default BlackList;
