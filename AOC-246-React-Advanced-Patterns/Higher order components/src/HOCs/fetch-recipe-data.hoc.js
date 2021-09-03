import React from "react";

const fetchRecipeData = Component => {
  const recipeData = [
    { name: "Cake" },
    { name: "Spaghetti" },
    { name: "Sushi" }
  ];

  return props => <Component recipeData={recipeData} {...props} />
};

export default fetchRecipeData;