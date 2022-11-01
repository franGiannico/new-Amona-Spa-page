import Burger from "./Burguer"
import RightNav from "./RightNav"
import LogoInicio from "./LogoInicio"

const Header = ({ open }) => {

    return (
        <header className="main-header" open={open} >                                 
            <div className="content-wrapper">
                <LogoInicio/>          
                <Burger/>      
                <RightNav/>                       
            </div>
        </header>
    )
}

export default Header