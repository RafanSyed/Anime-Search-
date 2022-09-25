import React from 'react'

const CharacterItem = ({ item }) => { 
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.animeImg} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.animeTitle}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.animeTitle}
            </li>
            <li>
              <strong><a href={item.animeUrl}>Where To Watch</a></strong> 
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
