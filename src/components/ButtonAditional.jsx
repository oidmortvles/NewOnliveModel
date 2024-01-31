import React from 'react';
import "./ButtonAditional.css";
import { Link } from 'react-router-dom';

function ButtonAditional({ to, fn, iconClas, data, colorSet }) {

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

  if(to){
    //SI RECIBE EL PARAMETRO "TO", FUNCIONA COMO UN "LINK"
  return (
    <Link to={to} className={styleSet}>
        {data}
        {iconClas}
    </Link>
  )
  }else if(fn){
    //SI RECIBE EL PARAMETRO "FN", FUNCIONA COMO UN "ONCLICK"
  return (
    <button className={styleSet} onClick={fn}>
      {data}
      {iconClas}
    </button>
    );
  }

  return(
    <button className={styleSet}>
      {data}
      {iconClas}
    </button>
  );
}

export default ButtonAditional