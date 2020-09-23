import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Components/Recipe/Recipe';

function App() {
  const APP_ID = "85a8478b";
  const APP_KEY = "1b97961caaaa072319a0fa21ce009c27";



  const [recipies, setRecipies] = useState([])

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  const requestLink = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;



  useEffect(() => {
    //code
    getRecipies();

  }, [query])

  const getRecipies = async() =>{
    const response = await fetch(requestLink);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);

    //after search we are clearing the search bar
    setSearch("");
  }



  return (
    <div className = "food-recipe-main">
      <div className = "search">
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch} placeholder = "food item ex. burger" />
        <button className ="search-button" type = "submit">Search</button>
      </form>
      </div>

      <div> 
      {
        recipies.map(recipe => (
          <Recipe key = {recipe.recipe.label} 
          title = {recipe.recipe.label} calories = {recipe.recipe.calories}
           image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          >

          </Recipe>
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
