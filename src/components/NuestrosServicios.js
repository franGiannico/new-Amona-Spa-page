import React from 'react'
import mujerToalla from ".//images/mujerToalla.jpg"
import pilates from ".//images/pilates.jpeg"
import piedrasCalientesEspalda from ".//images/piedrasCalientesEspalda.jpg"

const NuestrosServicios = () => {
  return (
    <section className="container-fluid row">            
        <h2>Nuestros Servicios</h2>
        <div className="container-fluid row"> 
            <div className="row col-sm-3"> 
                <img src={pilates} alt='pilates' width='50%'/>                
                <h3 className="card-title">Pilates</h3>
            </div>
            <div className="row col-sm-3">
                <img src={mujerToalla} alt='mujer toalla' width='50%'/> 
                <h3 className="card-title">Skin Care</h3>                
            </div>
            <div className="row col-sm-3">    
                <img src={piedrasCalientesEspalda} alt='piedras calientes' width='50%'/>                 
                <h3 className="card-title">Masajes</h3>
            </div>                    
        </div>
        <div class="container-fluid row">
                <h2 class="title">Sobre Nosotros</h2>
                <p>Creamos este espacio para cuidar de tu salud y tu belleza, desde enero del 2019. 
                Queremos que te sientas cuidado/a por nuestros profesionales y puedas salir renovado/a 
                luego de visitarnos.                 
                </p>
        </div>            
    </section>
  )
}

export default NuestrosServicios