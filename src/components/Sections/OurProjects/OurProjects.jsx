import tetraTech from "../../../assets/images/tetra-tech.png"
import globalHitss from "../../../assets/images/global-hitss.png"

import "./OurProjects.css"

export const OurProjetcs = () => {
    return (
        <section className="our-projects" id="our-projects">
            <h2 className="our-projects-title">Nossos Projetos</h2>
            <div className="our-projects-container">
                <div className="project">
                    <div className="project-image">
                        <img src={globalHitss} alt="" />
                    </div>
                    <div className="project-descriptions">
                        <h3 className="project-title">Global Hitss/Claro</h3>
                        <p className="description">Estamos engajados em uma parceria de longo prazo com a GlobalHitss/Claro, onde atuamos em uma equipe ágil que segue rigorosamente a metodologia SCRUM. Nosso foco principal é o desenvolvimento de um sistema de chatbot inovador que facilita a oferta e compra de produtos via WhatsApp. Além de criar novos fluxos de conversa, também participamos na criação de novos produtos que melhoram a experiência do usuário.</p>
                        <div className="used-skills-container">
                            <h3 className="used-skills-title">Tecnologias e ferramentas utilizadas</h3>
                            <div className="used-skills">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" alt="Java Icon" className="skill" title="Java"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="Jenkins Icon" className="skill" title="Jenkins"/> 
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="GIT Icon" className="skill" title="GIT"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"  alt="AWS Icon" className="skill" title="AWS"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman Icon" className="skill" title="Postman"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={tetraTech} alt="" />
                    <div className="project-descriptions">
                    <h3 className="project-title">Tetra Tech</h3>
                        <p className="description">Na TetraTech, colaboramos em uma série de projetos dentro da área de Engenharia, com especialização em barragens e estruturas geológicas. Atuamos de forma fullstack, abrangendo desde o backend até o frontend, além de desempenhar papéis chave na gestão de projetos. Nossa atuação inclui a liderança de equipes e a aplicação de princípios SCRUM, garantindo entregas pontuais e de alta qualidade.</p>
                        <div className="used-skills-container">
                            <h3 className="used-skills-title">Tecnologias e ferramentas utilizadas</h3>
                            <div className="used-skills">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" className="skill" title="React"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular Icon" className="skill" title="Angular"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" alt="Java Icon" className="skill" title="Java"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQLServer Icon" className="skill" title="SQLServer"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Icon" className="skill" title="PostgreSQL"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB Icon" className="skill" title="MongoDB"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg" alt="Cassandra Icon" className="skill" title="Cassandra"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" alt="Kafka Icon" className="skill" title="Kafka"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma Icon" className="skill" title="Figma"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}