import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Swiatla from "./components/Swiatla";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <Swiatla startColor={"green"} />
      <Swiatla />
      <Swiatla />
    </div>
  );
}

export default App;
