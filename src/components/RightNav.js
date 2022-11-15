import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40vw;
    padding-top: 3
    .5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <nav className="main-header main-menu" id="main-menu">
          <span id="close-menu-button" 
          className="menu-icon jam-close icon__icon"><svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="-6 -6 24 24" 
          fill="currentColor"
          width="40" 
          height="40" 
          preserveAspectRatio="xMinYMin" 
          ><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>
          </span> 
              <ul>
                  <li><NavLink to="/" exact="true">Inicio</NavLink></li>
                  <li><NavLink to="/actividades" exact="true">Actividades</NavLink></li>
                  <li><NavLink to="/sobreNosotras" exact="true">¿Quienes somos?</NavLink></li>
                  <li><NavLink to="/contacto" exact="true">Contacto</NavLink></li>
              </ul>
        </nav> 
    </Ul>
//   )
// }

    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li><a className="dropdown-item" href="#">Action</a></li>
    //             <li><a className="dropdown-item" href="#">Another action</a></li>
    //             <li><hr className="dropdown-divider"/></li>
    //             <li><a className="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  )
}
export default RightNav