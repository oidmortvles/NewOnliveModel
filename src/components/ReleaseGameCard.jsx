import React from 'react'
import './ReleaseGameCard.css'
import ButtonPlayGame from './ButtonPlayGame';
import ButtonAditional from './ButtonAditional';
import ButtonLike from './ButtonLike';
import ButtonInfo from './ButtonInfo';

function ReleaseGameCard({fondo, titulo, info}) {

    let sectionStyle = {
        backgroundImage: `url(${fondo})`        
      };

  return (

    <aside className='releaseGameCard' style={sectionStyle}>
        <article className='rgcContent'>

            <div className='rgcButtonPrincipal'>
                 <ButtonPlayGame/>
            </div>

            <div className='rgcInfoGameCard'>

                <h2>{titulo}</h2>
                <p>{info}</p>

                <section className='rgcButtonSection'>
                    <ButtonAditional data={"DEMO"} colorSet={"Primary"}/>
                    <ButtonLike colorSet={"White"}/>
                    <ButtonInfo colorSet={"White"}/>
                </section>

            </div>


        </article>
        

    </aside>

  )
}

export default ReleaseGameCard