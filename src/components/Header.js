import Burger from "./Burguer"
import RightNav from "./RightNav"
import LogoInicio from "./LogoInicio"

const Header = ({ open }) => {

    return (
        <header className="" open={open} >                                 
            <div className="">
                <LogoInicio value={"/imágenes amona/logo.png"}/>          
                <Burger/>      
                <RightNav/>                       
            </div>
        </header>
    )
}

export default Header