import React, { useEffect, useState } from "react";

const Main = (props) => {
  const [cardArray, setCardArray] = useState([]);
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let redObj = {
      color: "red",
      clicked: false
    }
  
    let greenObj = {
      color: "green",
      clicked: false
    }
  
    let yellowObj = {
      color: "yellow",
      clicked: false
    }
  
    let orangeObj = {
      color: "orange",
      clicked: false
    }
  
    let blueObj = {
      color: "blue",
      clicked: false
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

  const shuffle = () => {
    let array = cardArray;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCardArray(array);
  }

  const matchClick = (card) => {
    if(card.clicked){
      setReset(true);
      let array = cardArray;
      shuffle()
      cardArray.map((card) => {card.clicked = false;})
    } else {
      shuffle()
      setScore(score + 1)
      card.clicked = true;
    }
  }

  const displayCards = () => {
    return (
      <div>
        {cardArray.map((card) => {
          return <div key={card.color} className="card" 
          style={{backgroundColor: card.color}} 
          onClick={() => {matchClick(card)}}>{card.color}</div>;
        })}
      </div>
    )
  }

  return (
    <div className="Main">
      {displayCards()}
    </div>
  );
};

export default Main;


//test