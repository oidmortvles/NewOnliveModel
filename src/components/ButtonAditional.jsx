import React from 'react';
import "./ButtonAditional.css"

function ButtonAditional({iconClas, data, colorSet}) {

  let color;
  switch (colorSet) {
    case "Primary":
      color="buttonAditionalPrimary";
      break;

    case "Secondary":
      color="buttonAditionalSecondary";
      break;

    case "Action":
      color="buttonAditionalAction";
      break;

    case "White":
      color="buttonAditionalWhite";
      break;
      
    default:
      color="";
      break;
  }


  const styleSet = `buttonAditional ${color}`;

  return (
    <button className={styleSet}>
        {data}
        {iconClas}
    </button>
  )
}

export default ButtonAditional