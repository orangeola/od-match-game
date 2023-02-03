import React, { useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [curScore, setCurScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
