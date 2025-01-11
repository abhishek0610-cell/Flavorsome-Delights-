// // ... (previous imports)
// import React, { useState } from 'react';

// const Recipe = () => {
//   const [query, setQuery] = useState('');
//   const [recipeResults, setRecipeResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const searchForRecipe = async () => {
//     setLoading(true);
//     const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${query}`;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '2d32f811b2mshd4b0e45f1ea1194p147d51jsn2f18ad74003e',
//         'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//       // Extract the recipes from the 'd' property
//       const recipes = result.d || [];

//       console.log(recipes);
//       setRecipeResults(recipes);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     searchForRecipe();
//   };

//   return (
//     <div className='Recipeload'>
//       <div class="wrap">
//         <div class="search">
//           <input type="text" class="searchTerm"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Enter recipe query" />
//           <button onClick={handleSearch} class="searchButton">
//             <i class="fa fa-search"></i>
//           </button>
//         </div>
//       </div>
//       {/* <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter recipe query"
//       />
//       <button onClick={handleSearch}>Search</button> */}

//       {loading ? (
//         <p className='error'>Loading...</p>
//       ) : recipeResults.length > 0 ? (
//         <div>
//           <h2 className='error'>Search Results:</h2>
//           {recipeResults.map((recipe, index) => (
//             <div key={index} className='card'>
//               <div className='recipe-contain'>
//                 <div className='recipe-name'>
//                   <h3>Title: <br /> {recipe.Title}</h3>
//                 </div>
//                 {/* <div className='recipe-intro'>
//                   <p>{recipe.Instructions}</p>
//                 </div> */}
//               </div>
//               <div className='recipe-image'>
//                 <img src={`https:${recipe.Image}`} alt={recipe.Title} height='300px' />
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className='error' style={{ textAlign: 'center', marginTop: '20px', color: 'red', fontWeight: 'bold' }}>No results found</p>
//       )}
//     </div>
//   );
// };

// export default Recipe;
// ... (previous imports)
import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce'; // Install with: npm install lodash

const Recipe = () => {
  const [query, setQuery] = useState('');
  const [recipeResults, setRecipeResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe

  const searchForRecipe = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setRecipeResults([]);
      return;
    }

    setLoading(true);
    const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${searchQuery}`;
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
      const recipes = result.d || [];
      setRecipeResults(recipes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      searchForRecipe(searchQuery);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return (
    <div className=" bg-gray-50 pt-20 px-4  mt-10 sm:px-6 lg:px-8">
      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative group">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            className="w-full pl-12 pr-12 py-5 text-lg rounded-full
                border-2 border-transparent bg-white/90
                shadow-[0_0_15px_rgba(0,0,0,0.1)]
                focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                backdrop-blur-sm
                transition-all duration-300
                outline-none
                bg-gradient-to-r from-white to-white
                hover:border-blue-100
                focus:border-blue-500
                placeholder-gray-400
                hover:placeholder-blue-400
                focus:placeholder-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for delicious recipes..."
          />

          {/* Loading Spinner */}
          {loading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-6 w-6 
                      border-2 border-blue-500 border-t-transparent
                      shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              </div>
            </div>
          )}

          {/* Background Glow Effect */}
          <div className="absolute inset-0 -z-10 rounded-full
                  bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                  blur-xl opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500">
          </div>
        </div>
      </div>

      {/* Results Section */}
      {!loading && recipeResults.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipeResults.map((recipe, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                          transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https:${recipe.Image}`}
                    alt={recipe.Title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {recipe.Title}
                  </h3>
                  <button
                    onClick={() => setSelectedRecipe(recipe)} // Open modal with the selected recipe
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg 
                                   hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results State */}
      {!loading && !query && recipeResults.length === 0 && (
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-32 h-32 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Find Your Perfect Recipe
          </h2>
          <p className="text-gray-600 mb-2">
            Search from our collection of delicious recipes
          </p>
          <p className="text-sm text-gray-500">
            Try searching for "chicken", "pasta", or your favorite ingredient
          </p>
        </div>
      )}


      {/* Modal for Ingredients and Instructions */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 
               backdrop-blur-md flex justify-center items-center z-50 p-4 overflow-hidden"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="bg-white/95 backdrop-blur-sm rounded-2xl max-w-5xl w-full max-h-[90vh] 
                 overflow-y-auto shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient border */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-8 py-6 
                    border-b border-gray-200 flex justify-between items-center
                    bg-gradient-to-r from-white via-gray-50 to-white">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedRecipe.Title}</h2>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    30-45 mins
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    4-6 servings
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="p-2 hover:bg-gray-100/80 rounded-full transition-all duration-300 
                     hover:rotate-90 transform"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                    <img
                      src={`https:${selectedRecipe.Image}`}
                      alt={selectedRecipe.Title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:w-1/2 space-y-8">
                  {/* Ingredients */}
                  <div className="bg-gray-50/50 backdrop-blur-sm rounded-xl p-8 shadow-lg 
                          ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Ingredients
                    </h3>
                    <ul className="space-y-3">
                      {Object.values(selectedRecipe.Ingredients || {}).map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-3 group">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 
                                   flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {ingredient}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div className="bg-gray-50/50 backdrop-blur-sm rounded-xl p-8 shadow-lg 
                          ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Instructions
                    </h3>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {selectedRecipe.Instructions || 'No instructions available.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
