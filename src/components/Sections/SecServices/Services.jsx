import "./Services.css"

export const Services = () => {
    return (
        <section className="services">
            <div className="services-container">
                <div className="services-intro">
                    <p><span></span>Nossos serviços</p>
                    <h2 className="services-intro-title">O que nossa <br /> empresa pode <br /> <span>fazer por você?</span></h2>
                </div>
                <div className="general-services">
                    <div className="service">
                        <p className="service-index"><span></span>01</p>
                        <h3 className="service-title">Desenvolvimento de Sistemas</h3>
                        <p className="service-description">Criamos novos sistemas personalizados a partir do zero, adaptados às necessidades específicas do seu negócio. Nosso foco está em entregar soluções eficientes, escaláveis e seguras, utilizando as mais recentes tecnologias de desenvolvimento.</p>
                    </div>

                    <div className="service">
                        <p className="service-index"><span></span>02</p>
                        <h3 className="service-title">Manutenção de Sistemas</h3>
                        <p className="service-description">Oferecemos serviços contínuos de manutenção para sistemas já em operação, garantindo que eles permaneçam atualizados, seguros e funcionando de forma otimizada. Lidamos com correções de bugs, atualizações e melhorias de desempenho.</p>
                    </div>

                    <div className="service">
                        <p className="service-index"><span></span>03</p>
                        <h3 className="service-title">Refatoração de Sistemas</h3>
                        <p className="service-description">Refatoramos sistemas antigos para melhorar a eficiência, a legibilidade do código e a escalabilidade. Atualizamos a arquitetura e o design do software sem alterar sua funcionalidade, trazendo-o para padrões modernos.</p>
                    </div>

                    <div className="service">
                        <p className="service-index"><span></span>04</p>
                        <h3 className="service-title">Consultoria de Arquitetura</h3>
                        <p className="service-description">Fornecemos consultoria especializada em arquitetura de software e design de projetos. Ajudamos a definir a estrutura ideal para seu sistema, garantindo que ele seja robusto, escalável e alinhado às melhores práticas do mercado.</p>
                    </div>

                    <div className="service">
                        <p className="service-index"><span></span>05</p>
                        <h3 className="service-title">Gestão Agile</h3>
                        <p className="service-description">Atuamos em projetos ágeis, oferecendo serviços de Scrum Master e Product Owner para garantir que os processos de desenvolvimento sejam eficientes e orientados ao valor. Facilitamos a implementação de metodologias ágeis, focando na entrega contínua e na adaptação às mudanças.</p>
                    </div>

                    <div className="service">
                        <p className="service-index"><span></span>06</p>
                        <h3 className="service-title">Qualidade de Código</h3>
                        <p className="service-description">Realizamos análises detalhadas da qualidade do código, identificando e corrigindo problemas de estrutura, lógica e performance. Nosso objetivo é garantir que o código seja limpo, eficiente e de fácil manutenção.</p>
                    </div>

                    <div className="service">
                        <p className="service-index"><span></span>07</p>
                        <h3 className="service-title">Qualidade de Testes</h3>
                        <p className="service-description">Focamos na garantia de qualidade através de testes rigorosos, avaliando a funcionalidade, usabilidade e desempenho dos sistemas. Nosso serviço inclui a criação e execução de testes automatizados e manuais para assegurar que o software atenda aos requisitos esperados.</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}