import React from 'react'
import './PromotionalGame.css';
import ButtonPlayGame from './ButtonPlayGame';
import ButtonAditional from './ButtonAditional';
import ButtonLike from './ButtonLike';
import ButtonInfo from './ButtonInfo';

function PromotionalGame({games}) {

  let imgFondo='https://cdn3d.iconscout.com/3d/premium/thumb/gambling-9188410-7660620.png?f=webp'

  if(games)imgFondo = games.picture.large;
  
  let sectionStyle = {
    backgroundImage: `url(${imgFondo})`
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