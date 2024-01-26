import React from 'react';
import '../screens/GameScreen.css';
import GameIframe from '../components/GameIframe'
import ButtonAditional from '../components/ButtonAditional';
import SectionPromotionalGame from '../components/SectionPromotionalGame';
import PrincipalGameCard from '../components/PrincipalGameCard';
import ButtonLike from '../components/ButtonLike';
import ButtonShare from '../components/ButtonShare';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function GameScreen() {

  let imagen = "https://assets-prd.ignimgs.com/2023/12/18/gta-6-reveal-art-1702900099212.png";
  let sectionStyle = {
    backgroundImage: `url(${imagen})`        
  };
  let { id } = useParams();

  return (
    <main id='gameScreen' style={sectionStyle} >

        <h1 className='gsTitlePrincipal'>ID DEL JUEGO: {id}</h1>
      
      <section className='gsContent'>        
        <GameIframe/>

        <div className='gsbuttonAction'>
          <ButtonAditional data={"DEMO"} colorSet={"Primary"}/>
          <ButtonLike colorSet={"White"}/>
          <ButtonShare colorSet={"White"}/>
        </div>

        <aside className='gsDataGame'>
           < article className='gsArticleDescription'>
              <h2>Descripción</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores voluptate voluptates dolore ullam at accusantium aliquam, quae repudiandae sequi reiciendis adipisci debitis a iure deleniti rerum quibusdam quod ab tenetur dicta recusandae cum. Quam suscipit porro ducimus temporibus minus. Sint voluptate perspiciatis neque. Modi a eum fugiat non beatae cumque consequuntur.</p>
            </article>

            < article className='gsArticleTrailer'>
              <h2>Tráiler</h2>
              <img src={imagen} alt="Preview del Juego" />
            </article>          
        </aside>

        <SectionPromotionalGame>
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
              <PrincipalGameCard />
        </SectionPromotionalGame>

      </section>

      <Footer/>  
    
    </main>
  )
}

export default GameScreen