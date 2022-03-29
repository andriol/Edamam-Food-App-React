import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = ({ ingredients }) => {
  const ingredientsList = ingredients.map((ingredient) => {
    return (
      <ul key={uuidv4()} className='ingredient-list'>
        <li className='ingredient-text'>{ingredient.text}</li>
        <li className='ingredient-weight'>
          Weight - {ingredient.weight.toFixed(3)}
        </li>
      </ul>
    );
  });
  return <>{ingredientsList}</>;
};

export default RecipeDetails;
