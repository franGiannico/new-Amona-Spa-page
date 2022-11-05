import Burger from "./Burguer"
import RightNav from "./RightNav"
import LogoInicio from "./LogoInicio"

const Header = ({ open }) => {

    return (
        <header className="" open={open} >                                 
            <div className="">
                <LogoInicio value="https://github.com/franGiannico/new-Amona-Spa-page/blob/main/src/im%C3%A1genes/logo.png"/>                          
                <Burger/>      
                <RightNav/>                       
            </div>
        </header>
    )
}

export default Header