import React from 'react'
import './PromotionalGame.css';
import ButtonPlayGame from './ButtonPlayGame';
import ButtonAditional from './ButtonAditional';
import ButtonLike from './ButtonLike';
import ButtonInfo from './ButtonInfo';

function PromotionalGame({img}) {

  let sectionStyle = {
    backgroundImage: `url(${img})`        
  };

  return (
    <div className='promotionalGame' style={sectionStyle}>
        <div className="pgSectionAnimated">
            <div className="pgSectionA">
                 <ButtonLike colorSet={"White"}/>
                 <ButtonInfo colorSet={"White"}/>                
            </div>

            <div className="pgSectionB">
                <ButtonPlayGame/>
                <ButtonAditional data={"DEMO"} />
            </div>
                
        </div>        
    </div>
  )
}

export default PromotionalGame