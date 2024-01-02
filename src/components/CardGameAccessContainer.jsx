import React, { useEffect, useState } from 'react'
import './CardGameAccessContainer.css'
import PromotionalGame from '../components/PromotionalGame';

export default function CardGameAccessContainer() {

  const [games,setGames] = useState([]);

useEffect(()=>{

fetch('https://randomuser.me/api?results=10')
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
        <PromotionalGame key={index} games={game} />
      ))}
    </section>
  );
}
