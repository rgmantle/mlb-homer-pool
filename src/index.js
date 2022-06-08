import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import {
    Lineup,
    SearchBar,
    SearchResults
} from './components';

import {
    fetchCards
} from './api';

const MyHeader = () => {
    return (
      <header>
        <div>Hello, World!</div>
      </header>
    );
  }

 const App = () => {
   const [results, setResults] = useState([]);

   fetchCards().then(console.log);
   
   return (
      <div id="app">
        <SearchBar setResults={ setResults } />
        <SearchResults results={ results } />
        <Lineup />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );