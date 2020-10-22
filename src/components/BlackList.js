import React, { useState } from 'react';
import AddPeople from './AddPeople';

const BlackList = () => {
  const [lists, setLists] = useState([]);

  const addToList = (list) => {
    if (!list.firstName || !list.lastName) {
      return;
    }
    const newLists = [list, ...lists];

    setLists(newLists);
    console.log(list, ...lists);
  };

  const blItems = lists.map((item, index) => {
    return (
      <li key={index}>
        <a className={item.cName} href={item.url}>
          {item.id}
          {item.firstName}
          {item.lastName}
        </a>
      </li>
    );
  });
  return (
    <div className="">
      <h1>Add to blacklist</h1>
      <AddPeople onSubmit={addToList} />
      <div className="people-list">{blItems}</div>
    </div>
  );
};

export default BlackList;
