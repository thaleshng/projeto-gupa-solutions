import "./Hero.css"
import heroVideo from "../../../assets/video/bg-tech.mp4"

export const SectionHero = () => {
    return (
        <section className="hero">
            <video autoPlay muted loop className="hero-video">
                    <source src={heroVideo} type="video/mp4"/>
                    Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="hero-container">
                

                <h1>Nós somos, <br /><span>GUPASOLUTIONS.</span></h1>

                <a href="#">Baixe nosso portfólio</a>
            </div>
        </section>
    )
}