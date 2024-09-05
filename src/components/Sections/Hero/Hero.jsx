import "./Hero.css"
import heroVideo from "../../../assets/video/bg-tech.mp4"
import portfolio from "../../../assets/archives/GUPASOLUTIONS_Portfolio.pdf"

export const Hero = () => {
    return (
        <section className="hero">
            <video autoPlay muted loop className="hero-video" aria-label="Vídeo de fundo sobre tecnologia.">
                    <source src={heroVideo} type="video/mp4"/>
                    Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="hero-container">
                <h1 className="hero-title">Nós somos, <br /><span>GUPASOLUTIONS.</span></h1>

                <a href={portfolio} target="_blank">Acesse nosso portfólio</a>
            </div>
        </section>
    )
}