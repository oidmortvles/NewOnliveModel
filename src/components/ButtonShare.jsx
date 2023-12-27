import React from 'react';
import './ButtonShare.css';

function ButtonShare({colorSet}) {

    let colorShare;
    switch (colorSet) {
      case "Primary":
        colorShare="buttonSharePrimary";
        break;
  
      case "Secondary":
        colorShare="buttonShareSecondary";
        break;
  
      case "Action":
        colorShare="buttonShareAction";
        break;
        
      default:
        colorShare="buttonShare";
        break;
    }    

    const styleSetShare = `${colorShare}`;

  return (
    <button className={styleSetShare}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
        </svg>
    </button>
  )
}

export default ButtonShare