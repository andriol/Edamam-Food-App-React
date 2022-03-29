import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [alert, setAlert] = useState('');
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
  return (
    <div className='App'>
      <h1>Food App</h1>
      <form className='search-form'>
        <input
          type='text'
          name='query'
          onChange={''}
          value={''}
          autoComplete='off'
          placeholder='Search Food'
        />
        <input type='submit' value='serach' />
      </form>
    </div>
  );
};

export default App;
