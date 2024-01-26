import React from 'react';
import CategorySeccion from "../components/CategorySeccion";
import CategoryCard from "../components/CategoryCard";
import ReleaseGameCard from '../components/ReleaseGameCard';
import ReleaseGameCardSecction from '../components/ReleaseGameCardSecction';
import NavBar from '../components/NavBar';
import Carrousel from '../components/Carrousel';
import CardGameAccessContainer from '../components/CardGameAccessContainer';
import DashboardUser from './DashboardUser';
import "./PrincipalScreen.css";
import Footer from '../components/Footer';

function PrincipalScreen() {

  const imagenes =[

{img:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/06/avatar-2366079.jpg',
title: 'Candiba Games',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea ducimus debitis vero natus dicta. Delectus optio ducimus, nam at aut error expedita eaque sequi vel recusandae ullam deserunt in.'},


{img:'https://lumiere-a.akamaihd.net/v1/images/3_avtr-460_2647266a.jpeg',
title:'Giaconda Games',
description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea ducimus debitis vero natus.'},


{img:'https://i.blogs.es/2b6c43/1652128756_826_avatar-the-way-of-water-first-trailer-reveals-potential-plot/1366_2000.jpg',
title:'Giovani Lassio',
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea ducimus debitis vero natus dicta. Delectus optio ducimus, nam at aut error expedita eaque sequi vel recusandae ullam'}

];

  return (

<div id='principalScreen'>

    <NavBar/>
    
    
    <Carrousel imagenes={imagenes}/>

    
    
    <CategorySeccion>
            <CategoryCard title={"Juegos en Vivo"} informacion={"Más de 300 juegos"} img={'https://betcris.com/wp-content/uploads/2022/04/img-u-roulette-cherries-2.png'}/>
            <CategoryCard title={"Maquinitas"} informacion={"Más de 300 juegos"} img={'https://www.casino-sites.in/wp-content/uploads/2021/01/Slot-Image-Banners-21122020.png'}/>
            <CategoryCard title={"Hot Games"} informacion={"Más de 300 juegos"} img={'https://www.nsa-nv.com/wp-content/uploads/2019/12/casino-points.png'}/>
            <CategoryCard title={"Nuevos Juegos"} informacion={"Más de 300 juegos"} img={'https://alittlecampy.com/wp-content/uploads/2017/12/2000px-Two_red_dice_01.svg_.png'}/>
    </CategorySeccion>

    
    
    <CardGameAccessContainer/>
    

    
    <ReleaseGameCardSecction>
          <ReleaseGameCard fondo={'https://i.ytimg.com/vi/VrKv5LnoCE0/maxresdefault.jpg'} titulo={"God of War"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
          <ReleaseGameCard fondo={'https://beebom.com/wp-content/uploads/2023/06/Overwatch-2-Gameplay.webp?w=640'} titulo={"Beebom"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
          <ReleaseGameCard fondo={'https://gameranx.com/wp-content/uploads/2021/08/Splitgate6-1024x576.jpg'} titulo={"Mudra"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
          <ReleaseGameCard fondo={'https://www.bazicenter.com/wp-content/uploads/2019/09/Borderlands-3-4-1024x576.jpg'} titulo={"CiberPunk 2077"} info={"loremahshajshd hjahssjnjknksdjf lsdfsdf sklsdfsd ks psldjf ñsl"}/>
    </ReleaseGameCardSecction>    
  
  
    
    <Footer/>
</div>
    

  )
}

export default PrincipalScreen