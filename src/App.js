import React , { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
          {
          label: 'Red',
          value: 'red'
          },

          {
          label: 'Yellow',
          value: 'yellow'
          }
,
          {
          label: 'Blue',
          value: 'blue'
          }
];


export default () => {


  return (
    <div className="ui container">
      <br/>
      <Translate/>
    </div>
  );
};
