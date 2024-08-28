import logo from "../../assets/images/logo.png"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <a href="#" className="logo"><img src={logo} alt="Logo" height={"100px"}/></a>

                <nav>
                    <ul>
                        <li><a href="#" className="gradient-text">Sobre</a></li>
                        <li><a href="#" className="gradient-text">Serviços</a></li>
                        <li><a href="#" className="gradient-text">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}