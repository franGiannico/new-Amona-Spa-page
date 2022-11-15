
import React from "react"
import Burger from "./Burguer"
import RightNav from "./RightNav"
import Logo from "./Logo"
import logoAmona from ".//images/logoAmona.png"
// import OffCanvas from "./OffCanvas"

const Header = () => {

    return (                                        
        <div className="navbar navbar-expand-lg bg-light">
            <Logo value={logoAmona}/>                          
            <Burger/>
            {/* <OffCanvas/>  */}
            <RightNav/>
        </div>

    )
}

export default Header