import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  const [isFlipped, Flip] = useFlip()


  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={Flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
