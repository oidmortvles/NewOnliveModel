import React from 'react';
import CategorySeccion from "./CategorySeccion";
import CategoryCard from "./CategoryCard";
import ReleaseGamesCard from './ReleaseGamesCard';
import ReleaseGamesSecction from './ReleaseGamesSecction';
import "./PrincipalScreen.css";
import GameScreen from './GameScreen';
import NavBar from './NavBar';


function PrincipalScreen() {
  return (

<div id='principalScreen'>

    <NavBar/>
    

    <CategorySeccion>
            <CategoryCard title={"Juegos en Vivo"} informacion={"Más de 300 juegos"} img={'https://betcris.com/wp-content/uploads/2022/04/img-u-roulette-cherries-2.png'}/>
            <CategoryCard title={"Maquinitas"} informacion={"Más de 300 juegos"} img={'https://www.casino-sites.in/wp-content/uploads/2021/01/Slot-Image-Banners-21122020.png'}/>
            <CategoryCard title={"Hot Games"} informacion={"Más de 300 juegos"} img={'https://www.nsa-nv.com/wp-content/uploads/2019/12/casino-points.png'}/>
            <CategoryCard title={"Nuevos Juegos"} informacion={"Más de 300 juegos"} img={'https://alittlecampy.com/wp-content/uploads/2017/12/2000px-Two_red_dice_01.svg_.png'}/>
    </CategorySeccion>
  

    <ReleaseGamesSecction>
          <ReleaseGamesCard fondo={'https://i.ytimg.com/vi/VrKv5LnoCE0/maxresdefault.jpg'} titulo={"God of War"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
          <ReleaseGamesCard fondo={'https://beebom.com/wp-content/uploads/2023/06/Overwatch-2-Gameplay.webp?w=640'} titulo={"Beebom"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
          <ReleaseGamesCard fondo={'https://gameranx.com/wp-content/uploads/2021/08/Splitgate6-1024x576.jpg'} titulo={"Mudra"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
          <ReleaseGamesCard fondo={'https://www.bazicenter.com/wp-content/uploads/2019/09/Borderlands-3-4-1024x576.jpg'} titulo={"CiberPunk 2077"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
    </ReleaseGamesSecction>    


    <GameScreen imagen={'https://assets-prd.ignimgs.com/2023/12/18/gta-6-reveal-art-1702900099212.png'}/>

</div>
    

  )
}

export default PrincipalScreen