import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "./home";
import Todo from "./components/apps/Todo";
import SignIn from "./components/apps/SignIn";
import RecipeList from "./components/apps/Recipies";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/todos" element={<Todo />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/recipes" element={<RecipeList />} />

      {/* Uncomment and fix these when needed */}
      {/* <Route path="/products" element={<Products />} /> */}
      {/* <Route path="/recipes" element={<Recipes />} /> */}
      {/* <Route path="/signin" element={<SignIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
    </Routes>
  );
}

export default RouteComponent;
