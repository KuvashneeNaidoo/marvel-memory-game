import React, { useState, useEffect } from "react";
import "../CSS/SingleCard.css";

/* We will start creating the SingleCard component by specifying the following card properties below. */
const SingleCard = ({
  handleClick,
  id,
  item,
  flipped,
  solved,
  height,
  width,
  disabled,
}) => {
  const [isFlipped, setIsFlipped] = useState(flipped);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(false);
      }, 3000);

      return () => clearTimeout(timer); // Clean up the timer when the component unmounts
    }
  }, [isFlipped]);

  // Handle the click and flip the card
  const handleCardClick = () => {
    if (!disabled) {
      handleClick(id);
      setIsFlipped(true);
    }
  };

  /* We will now return these properties. The SingleCard is assigned a className of flipped whereby
  the card will be flipped over when clicked or matched. It is also assigned a ClassName of flipped with an 
  empty string which will not allow the card to be flipped over. An "onClick" function is used whereby if 
  the disabled state is set to true the card will not flip, however if the disabled state is not true then 
  the handleClick method comes into action. Lastly, the front image of the card will be showed if the 
  player flips over or matches a card pair, if not then the back image of the card will be shown. */
  return (
    <div
      className={`flip-container ${isFlipped ? "flipped" : ""}`}
      style={{
        width,
        height,
      }}
      onClick={handleCardClick}
    >
      <div className="flipper">
        <img
          style={{
            height,
            width,
          }}
          className={isFlipped ? "front" : "back"}
          src={isFlipped || solved ? `/img/${item}.jpg` : "/img/cardback.jpg"}
          alt={item}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SingleCard;
