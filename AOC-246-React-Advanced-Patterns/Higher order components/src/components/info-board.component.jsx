import fetchRecipeData from "../HOCs/fetch-recipe-data.hoc.js";
import React from "react";

const InfoBoard = ({ recipeData }) => {
  return (
    <ul>
      { recipeData.map(({ name }, i) => <li key={i}>{ name }</li>) }
    </ul>
  )
};

export default fetchRecipeData(InfoBoard);