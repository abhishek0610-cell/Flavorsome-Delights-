import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import debounce from 'lodash/debounce';

// Add Modal Component
const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{recipe.Title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={`https:${recipe.Image}`} 
                alt={recipe.Title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                <ul className="list-disc list-inside space-y-1">
                  {Object.values(recipe.Ingredients || {}).map((ingredient, idx) => (
                    <li key={idx} className="text-gray-600">{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Instructions</h3>
                <div className="text-gray-600 whitespace-pre-wrap">
                  {recipe.Instructions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
