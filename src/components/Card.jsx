import React from 'react'

function Card({name,image}) {
  return (
    <div className='cart'>


       <h2>{name}</h2>
       <img src={image} alt={name} />     
    
 </div>
  )
}

export default Card