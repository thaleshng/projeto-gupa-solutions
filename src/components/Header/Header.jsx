import logo from "../../assets/images/logo.png"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <a href="#" className="logo"><img src={logo} alt="Logo" height={"100px"}/></a>

                <nav className="navbar">
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}