import React from 'react'
import faceMassage from ".//images/faceMassage.jpg"
const Banner = () => {
  return (
        <div className="card text-bg-dark">
            <img src={faceMassage} className="card-img" alt="masajes faciale"/>
            <div className="card-img-overlay">
                <h1 className="card-title">Bienvenidos a Amona Spa</h1>
                <h3 className="card-text">Tu lugar de relajación, salud y armonía interior</h3>
                <button type="button" className="btn btn-primary btn-lg"
                    href="https://api.whatsapp.com/send?phone=5493515193175&text=hola,%20quiero%20reservar%20un%20turno..." 
                    target="_blank" 
                    rel="noopener noreferrer">Reservar
                </button>
            </div>
        </div>
    )
    
}

export default Banner