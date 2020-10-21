import React from 'react';
import AddPeople from './AddPeople';

function Blacklist({ blacklist, people }) {
  return blacklist.map((people, index) => (
    <div
      className={people.isComplete ? 'blacklist-row complete' : 'blacklist-row'}
      key={index}
    ></div>
  ));
}

export default Blacklist;
