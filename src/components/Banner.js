import React from 'react'

const Banner = () => {
  return (
        <section class="main-banner section-container">
            <div class="content-wrapper content">
                <div class="container">
                    <h1 class="title">Bienvenidos a Amona Spa</h1>
                    <p class="subtitle">Tu lugar de relajación, salud y armonía interior</p>
                    <div>
                        <a class="button white" href="https://api.whatsapp.com/send?phone=5493515193175&text=hola,%20quiero%20reservar%20un%20turno..." target="_blank">Reservá tu turno!</a>
                    </div>
                </div>
                <div class="container">
                    <img class="image" src="/imagenes/imagen-masajes.png" alt="imagen masajes"/>
                </div>
            </div>
        </section>
  )
}

export default Banner