import React, { useEffect, useState } from "react";

const Main = (props) => {
  const [cardArray, setCardArray] = useState([]);
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let redObj = {
      color: "red",
      clicked: "false"
    }
  
    let greenObj = {
      color: "green",
      clicked: "false"
    }
  
    let yellowObj = {
      color: "yellow",
      clicked: "false"
    }
  
    let orangeObj = {
      color: "orange",
      clicked: "false"
    }
  
    let blueObj = {
      color: "blue",
      clicked: "false"
    }

    setCardArray([...cardArray, redObj, greenObj, yellowObj, orangeObj, blueObj]);
  }, [])

  useEffect(()=> {
    props.setCur(score);
  }, [score])

  useEffect(()=> {
    props.setNewHigh(score);
    setScore(0);
    setReset(false);
  }, [reset])

  //todo
  //write randomise order function
  //initalise onclick for every color div

  return (
    <div className="Main">
      <div>
        {cardArray.map((card) => {
          return <div key={card.color} className="card" style={{backgroundColor: card.color}}>{card.color}</div>;
        })}
      </div>
      <button onClick={() => {setScore(score + 1)}}>Click me</button>
      <button onClick={() => {setReset(true)}}>Click me</button>
    </div>
  );
};

export default Main;
