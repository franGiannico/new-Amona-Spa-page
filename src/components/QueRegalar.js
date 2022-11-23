import React from 'react'
import FondoHojas from './FondoHojas'
import queRegalar from './images/queRegalar.jpg'
import pediGiftCard from './images/pediGiftCard.jpg'


const QueRegalar = () => {
  return (
    <div>
        <FondoHojas />
        <div className='container-fluid img-fluid'>
            <img src={queRegalar} alt='card qué regalar' className='img-fluid' width='500px'/>
            <img src={pediGiftCard} alt='pedi tu gift card' className='img-fluid' width='500px'/>
        </div>
    </div>
  )
}

export default QueRegalar