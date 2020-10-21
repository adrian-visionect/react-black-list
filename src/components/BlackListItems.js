import React, { useState } from 'react';
import AddPeople from './AddPeople';
import Blacklist from './BlackList';
const BlackListItems = () => {
  const [blacklist, setBlacklist] = useState([]);

  const addPeople = (people) => {
    if (!people.firstName) {
      return;
    }

    const newBlackList = [people, ...blacklist];

    setBlacklist(newBlackList);
    console.log(...blacklist);
  };
  return (
    <div className="app-container">
      <h1>What's the plan for today?</h1>
      <AddPeople onSubmit={addPeople} />
      <Blacklist blacklist={blacklist} />
    </div>
  );
};

export default BlackListItems;
