import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RouteComponent from "./router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <Navbar />
      <RouteComponent />
    </div>
  );
}

export default App;
