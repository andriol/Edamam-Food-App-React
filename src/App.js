import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Alert from './components/Alert';
import Recipe from './components/Recipe';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [alert, setAlert] = useState('');
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const response = await axios.get(url);
      console.log(response);
      if (!response.data.more) {
        return setAlert(`No results found for ${query}`);
      }
      setRecipes(response.data.hits);
      setQuery('');
      setAlert('');
    } else {
      return setAlert('Please fill in the form');
    }
  };

  setTimeout(() => {
    setAlert();
  }, 4000);
  return (
    <div className='App'>
      <h1>Food App</h1>
      <form onSubmit={(e) => e.preventDefault()} className='search-form'>
        {alert !== '' && <Alert alert={alert} />}
        <input
          type='text'
          name='query'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          autoComplete='off'
          placeholder='Search Food...'
        />
        <input type='submit' value='search' onClick={getData} />
      </form>
      <div className='recipes'>
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
