import React, { useState } from 'react';
import AddPeople from './AddPeople';
import Blacklist from './BlackList';
const BlackListItems = () => {
  const addPeople = (props) => {
    if (!props.firstName) {
      return;
    }
  };
  return (
    <div className="app-container">
      <h2>dsad</h2>
      <div>{props.lists}</div>
    </div>
  );
};

export default BlackListItems;
