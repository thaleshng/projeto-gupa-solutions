import logo from "../../assets/images/logo.png"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <a href="/" className="logo"><img src={logo} alt="Logo" height={"100px"}/></a>

                <nav className="navbar">
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#our-projects">Nossos Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}