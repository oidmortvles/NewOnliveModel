import React, { useEffect, useState } from 'react'
import './CardGameAccessContainer.css'
import PrincipalGameCard from './PrincipalGameCard';
import ReleaseGameCard from './ReleaseGameCard';


export default function CardGameAccessContainer() {

  const [games,setGames] = useState([]);

useEffect(()=>{

fetch('https://randomuser.me/api?results=28')
  .then(async res=>{
    if(!res.ok) throw new Error ('Error en la peticion de Juegos')
    return await res.json();
  })
  .then(res=>{
    setGames(res.results);
  })
  .catch(err=>{
    console.log(err);
  })

},[]);


useEffect(() => {
  // Este useEffect se ejecutará cada vez que 'games' se actualice
}, [games]);


   return (
    <section className='cardGameAccessContainer'>
      {games.map((game, index) => (
        
        index % 2 === 0 ?(

          <PrincipalGameCard 
            key={index}
            games={game}
            className='corto'/>

        ):(  

          <ReleaseGameCard
            key={index}
            fondo={game.picture.large}
            titulo={game.name.first}
            info={game.email} 
            className='largo'/>
            
        )
        
      ))}
    </section>
  );
}
