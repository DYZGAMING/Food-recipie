import React from 'react';
import './Recipe.css'

const Recipe = ({image, title, calories, ingredients}) => {
    return (
        <div className = 'recipe-item'>
            <h1>{title}</h1>
            <ul className = "recipe-list">
                {
                    ingredients.map(recipe => (
                        <li>{recipe.text}</li>
                    ))
                }
            </ul>
            <img src ={image} alt=""/>
            <p>Contains: {Math.round(calories)} cal</p>

        </div>
    );
};

export default Recipe;