import React, { useState, useEffect } from "react";

function ToggleButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    isFavorite === true ? setIsFavorite(false) : setIsFavorite(true);
  }
  
  return (
    <button
      onClick={handleFavorite}
      className={isFavorite ? "card-favicon favorite" : "card-favicon"}
    >
      {props.icon}
    </button>
  );
}

export default ToggleButton;
