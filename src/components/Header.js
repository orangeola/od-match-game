import React, { useState } from "react";

const Header = (props) => {
  return (
    <div className="Header">
      <p>High Score: {props.highScore}</p>
      <p>Current Score: {props.curScore}</p>
    </div>
  );
};

export default Header;
