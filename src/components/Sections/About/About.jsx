import aboutImage from "../../../assets/images/about-image.jpg"

import "./About.css"

export const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="about-title">sobre nós</h2>
            <div className="about-container">
                <img src={aboutImage} alt="" />
                <div className="about-description">
                    <p>A <span>GUPASOLUTIONS</span> é uma empresa de tecnologia comprometida com a inovação e a excelência. </p>
                    <p>Nosso time é especializado em desenvolver soluções personalizadas que atendem às necessidades específicas de nossos clientes, sempre com foco em qualidade, agilidade e eficiência. Atuamos em projetos desafiadores, aplicando as melhores práticas do mercado e utilizando tecnologias de ponta para entregar resultados que superam as expectativas.</p>
                    <p>Com uma abordagem colaborativa e voltada para o futuro, acreditamos na importância de entender profundamente o negócio de nossos clientes para oferecer soluções que realmente façam a diferença.</p>
                    <p>Nossa missão é transformar ideias em realidade, contribuindo para o sucesso e crescimento de nossos parceiros.</p>
                </div>
            </div>
            
        </section>
    )
}