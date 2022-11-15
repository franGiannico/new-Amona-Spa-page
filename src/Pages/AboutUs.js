import React from 'react'

const AboutUs = () => {
  return (
    <>
        <section className="about-us section-container">
                <h1>¿Quienes somos?</h1>
                <div className="content-wrapper">
                    <article className="about-item">
                        <div className="image-container">
                            <img src="/imagenes/equipo-amona.png" alt="equipo amona"/>                        
                        </div>
                        <div>
                            <h2>Sobre Nosotras</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis ratione et illum atque accusantium eos fugiat dolor ad in, inventore eligendi facere eaque amore, perferendis neque, error voluptatum labore.</p>                            
                        </div>
                    </article>
                    <article className="about-item">
                        <div className="image-container">
                            <img src="/imagenes/equipo-amona-2.png" alt="equipo amona dos"/>                        
                        </div>
                        <div>
                            <h2>Misión</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis ratione et illum atque accusantium eos fugiat dolor ad in, inventore eligendi facere eaque amore, perferendis neque, error voluptatum labore.</p>                            
                        </div>
                    </article>
                    <article className="about-item">
                        <div className="image-container">
                            <img src="/imagenes/amona-vision.png" alt="vision amona"/>                        
                        </div>
                        <div>
                            <h2>Visión</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis ratione et illum atque accusantium eos fugiat dolor ad in, inventore eligendi facere eaque amore, perferendis neque, error voluptatum labore.</p>                            
                        </div>
                    </article>
                </div>            
        </section>
    </>

  )
}

export default AboutUs