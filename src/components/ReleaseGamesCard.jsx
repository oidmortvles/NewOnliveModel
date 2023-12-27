import React from 'react'
import './ReleaseGamesCard.css'
import ButtonPlayGame from './ButtonPlayGame';
import ButtonAditional from './ButtonAditional';
import ButtonLike from './ButtonLike';
import ButtonInfo from './ButtonInfo';

function ReleaseGamesCard({fondo, titulo, info}) {

    let sectionStyle = {
        backgroundImage: `url(${fondo})`        
      };

  return (

    <aside className='featuresGamesCard' style={sectionStyle}>
        <article className='fgcContent'>

            <div className='fgcButtonPrincipal'>
                 <ButtonPlayGame/>
            </div>

            <div className='fgcInfoGamesCard'>

                <h2>{titulo}</h2>
                <p>{info}</p>

                <section className='fgcButtonSection'>
                    <ButtonAditional data={"DEMO"} colorSet={"Primary"}/>
                    <ButtonLike colorSet={"White"}/>
                    <ButtonInfo colorSet={"White"}/>
                </section>

            </div>


        </article>
        

    </aside>

  )
}

export default ReleaseGamesCard