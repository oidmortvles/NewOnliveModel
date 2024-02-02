import React from 'react'
import './PrincipalGameCard.css';
import ButtonPlayGame from './ButtonPlayGame';
import ButtonAditional from './ButtonAditional';
import ButtonLike from './ButtonLike';
import ButtonInfo from './ButtonInfo';

function PrincipalGameCard({games, idGame}) {

  let imgFondo='https://cdn3d.iconscout.com/3d/premium/thumb/gambling-9188410-7660620.png?f=webp'

  if(games){
    imgFondo = games.picture.large;
  }  
  
  let sectionStyle = {
    backgroundImage: `url(${imgFondo})`
  };

  let direccion = idGame ? `/game/${idGame}` : `/game/20`;  

  return (
    <div className='principalGameCard' style={sectionStyle}>
        <div className="pgcSectionAnimated">
            <div className="pgcSectionA">
                 <ButtonLike colorSet={"White"}/>
                 <ButtonInfo colorSet={"White"}/> 
                                
            </div>

            <div className="pgcSectionB">
                <ButtonPlayGame />
                <ButtonAditional data={"DEMO"} to={direccion}/>
            </div>
                
        </div>        
    </div>
  )
}

export default PrincipalGameCard