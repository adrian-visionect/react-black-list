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
  return (
    <div className="">
      <h1>Add to blacklist</h1>
      <AddPeople onSubmit={addToList} />
    </div>
  );
};

export default BlackList;
