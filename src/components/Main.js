import React, { useEffect, useState } from "react";

const Main = (props) => {
  const [cardArray, setCardArray] = useState([]);
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(()=> {
    props.setCur(score);
  }, [score])

  useEffect(()=> {
    props.setNewHigh(score);
    setScore(0);
    setReset(false);
  }, [reset])

  return (
    <div className="Main">
      <p>Show clickable cards here</p>
      <button onClick={() => {setScore(score + 1)}}>Click me</button>
      <button onClick={() => {setReset(true)}}>Click me</button>
    </div>
  );
};

export default Main;
