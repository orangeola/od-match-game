import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [curScore, setCurScore] = useState(0);

  const updateHiScore = (newScore) => {
    if (newScore > highScore){
      setHighScore(newScore);
    }
  }

  const updateCurScore = (currentScore) => {
    setCurScore(currentScore);
  }

  return (
    <div className="App">
      <Header highScore = {highScore} curScore = {curScore}/>
      <Main setNewHigh = {updateHiScore} setCur = {updateCurScore}/>
    </div>
  );
};

export default App;
