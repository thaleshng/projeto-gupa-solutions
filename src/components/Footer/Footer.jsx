import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <h2 className="footer-title">Nos envie uma mensagem!</h2>
                <div className="social-contact">
                    <a href="mailto:gupasolutions01@gmail.com?subject=Interesse%20na%20Contatação%20de%20Serviços"><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://wa.me/5531994138551?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20empresa%20GUPASOLUTIONS.
" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    {/* <p>Email: <a href="mailto:gupasolutions01@gmail.com?subject=Contato%20via%20Website&body=Escreva%20sua%20mensagem%20aqui.">gupasolutions01@gmail.com</a></p>
                    <p>WhatsApp: <a href="">(31) 99413-8551</a></p> */}
                </div>
                <p>© 2024 GUPASOLUTIONS.</p>
            </div>
        </footer>
    )
}