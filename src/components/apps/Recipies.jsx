import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const url = "https://dummyjson.com/recipes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setRecipes(json.recipes);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-base-200 min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-400">
        Delicious Recipes!
      </h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Explore a variety of cuisines with our hand-picked recipes. Find your
        next favorite dish today!
      </p>
      <div className="grid grid-cols-1  gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="hero  shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row items-center p-6 card card-side"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-48 h-48 object-cover rounded-lg shadow-md lg:mr-6"
            />
            <div className="flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {recipe.name}
              </h2>
              <p className="text-sm font-semibold text-gray-600 uppercase">
                {recipe.cuisine} Recipes
              </p>
              <div className="flex items-center my-2">
                <i className="fas fa-star text-orange-500"></i>
                <i className="fas fa-star text-orange-500"></i>
                <i className="fas fa-star text-orange-500"></i>
                <i className="fas fa-star text-orange-500"></i>
                <i className="fas fa-star text-orange-500"></i>
                <span className="text-sm text-gray-500 ml-2">
                  {recipe.rating} Ratings
                </span>
              </div>

              <details className="mb-2">
                <summary className="btn btn-outline btn-info w-full">
                  Ingredients
                </summary>
                <div className="p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md mt-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div className="flex flex-row gap-2">
                      <b>{index}</b> <ol>{ingredient}</ol>
                    </div>
                  ))}
                </div>
              </details>

              <details className="mb-4">
                <summary className="btn btn-outline btn-info w-full">
                  Instructions
                </summary>
                <div className="p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md mt-2 leading-relaxed space-y-2">
                  {recipe.instructions.map((instruction, index) => (
                    <div className="flex flex-row gap-2">
                      <b>{index}</b> <ol>{instruction}</ol>
                    </div>
                  ))}
                </div>
              </details>

              <Link to={``} className="btn btn-primary self-start">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
