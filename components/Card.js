import React from "react";
import back from "../public/back.png";
import Image from "next/image";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.download_url}
          height="150px"
          width="110px"
        />
        <Image
          src={back}
          className="back"
          alt="Picture of the author"
          width="110px"
          height="120px"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Card;
