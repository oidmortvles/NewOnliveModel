import React from 'react';
import './GameScreen.css';
import GameIframe from './GameIframe'
import ButtonAditional from './ButtonAditional';
import SectionPromotionalGame from './SectionPromotionalGame';
import PromotionalGame from './PromotionalGame';
import ButtonLike from './ButtonLike';
import ButtonShare from './ButtonShare';

function GameScreen({imagen}) {

  let sectionStyle = {
    backgroundImage: `url(${imagen})`        
  };

  return (
    <main id='gameScreen' style={sectionStyle} >

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
              <PromotionalGame img={'https://image.jeuxvideo.com/medias-crop-1200-675/168450/1684504558-2139-card.png'}/>
              <PromotionalGame img={'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/07/gta-vi-grand-theft-auto-vi-2762629.jpg'}/>
              <PromotionalGame img={'https://sm.ign.com/ign_latam/feature/g/gta-6-ever/gta-6-everything-we-know-news-leaks-and-pre-trailer-intel_3uxv.jpg'}/>
              <PromotionalGame img={'https://www.hardware.com.br/wp-content/uploads/2023/12/GTA-6-Grand-Theft-Auto-VI-Rockstar-Games-Wallpaper-Artwork-Jason-Vice-City-2024.png'}/>
        </SectionPromotionalGame>

      </section>


    </main>
  )
}

export default GameScreen