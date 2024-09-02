import { About } from "../Sections/About/About"
import { Hero } from "../Sections/Hero/Hero"
import { OurProjetcs } from "../Sections/OurProjects/OurProjects"
import { Services } from "../Sections/SecServices/Services"

export const Main = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <OurProjetcs />
        </>
        
    )
}