// ... (previous imports)
import React, { useState } from 'react';

const Recipe = () => {
  const [query, setQuery] = useState('');
  const [recipeResults, setRecipeResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchForRecipe = async () => {
    setLoading(true);
    const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d32f811b2mshd4b0e45f1ea1194p147d51jsn2f18ad74003e',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Extract the recipes from the 'd' property
      const recipes = result.d || [];

      console.log(recipes);
      setRecipeResults(recipes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    searchForRecipe();
  };

  return (
    <div className='Recipeload'>
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter recipe query" />
          <button onClick={handleSearch} class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      {/* <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter recipe query"
      />
      <button onClick={handleSearch}>Search</button> */}

      {loading ? (
        <p className='error'>Loading...</p>
      ) : recipeResults.length > 0 ? (
        <div>
          <h2 className='error'>Search Results:</h2>
          {recipeResults.map((recipe, index) => (
            <div key={index} className='card'>
              <div className='recipe-contain'>
                <div className='recipe-name'>
                  <h3>Title: <br /> {recipe.Title}</h3>
                </div>
                {/* <div className='recipe-intro'>
                  <p>{recipe.Instructions}</p>
                </div> */}
              </div>
              <div className='recipe-image'>
                <img src={`https:${recipe.Image}`} alt={recipe.Title} height='300px' />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='error' style={{ textAlign: 'center', marginTop: '20px', color: 'red', fontWeight: 'bold' }}>No results found</p>
      )}
    </div>
  );
};

export default Recipe;
