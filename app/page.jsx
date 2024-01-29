import Image from "next/image";
import FullProjects from "@/components/FullProjects/FullProjects";
import Tittle from "@/components/Tittle/Tittle";
import ContactItem from "@/components/ContactItem/ContactItem";
import NavBar from "@/components/NavBar/NavBar";
import Description from "@/components/Description/Description";
import ButtonDark from "@/components/ButtonDark/ButtonDark";
import projects from "@/projects";

const PrincipalPage = () => {

  return (
    <div className="w-full isolate pt-20">
      <NavBar />
      <section id='/' className="relative bg-cover py-60 flex flex-col justify-center items-center w-full mt-4 overlay px-8 lg:px-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className='lg:text-6xl text-4xl text-white text-center font-bold font-montserrat z-10'>Ideas que generan proyectos</span>
          <img className="w-32 h-32 z-10" src="assets/images/biglogo01.png" alt="logo"/>
          <ButtonDark text="Conoce más" href={'https://proinmo502.com/'} />
        </div>
      </section>
          <section id='/projects' className="w-full relative py-10 px-8 lg:px-10 flex flex-col items-center">
            <Tittle title="Proyectos" center color={"#545c5c"}/>
            <p className=" text-lg lg:text-xl text-center text-grayish font-montserrat w-4/5 lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center my-10">
              <FullProjects projects={projects} />
            </div>
          </section>
          <section id='/about' className="w-full relative py-10">
          <img className="w-full lg:h-full h-[300px] object-cover brightness-50" src="assets/images/about.png" alt="about"/>
            <div className="w-full flex flex-col justify-center text-center items-center px-8 lg:px-10">
              <div className="bg-white w-4/5  lg:w-1/2 flex flex-col justify-start items-start shadow-lg lg:px-10 px-6 py-16 lg:py-28 absolute top-1/4">
                <Tittle title="En Proinmo" center color={"#545c5c"}/>
                <span className="font-montserrat text-lg lg:text-xl text-kaqui text-start xs:leading-tight">En Proinmo, creemos en la magia de transformar sueños en realidades tangibles. Como una empresa líder en el sector inmobiliario, nos dedicamos a convertir las ideas y aspiraciones de nuestros clientes en propiedades concretas. Nuestra pasión reside en la creación de espacios que no solo satisfacen necesidades, sino que también inspiran y enriquecen vidas. </span>
                <img className="lg:w-32 lg:h-32 w-20 h-20 absolute right-0 bottom-0" src="assets/images/biglogo01.png" alt="signature"/>
              </div>
            </div>
          </section>
          <section id='/contact' className="w-full relative xl:mt-24 mt-60 lg:mt-30">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <Tittle title="Con Proinmo, tus sueños se convierten en ideas" center color={"#545c5c"}/>
              <p className=" text-lg lg:text-xl text-center text-grayish font-montserrat w-4/5 lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
                <ContactItem name="Clara Irving Bell" number="50005536" mail="clara@proinmo502.com" img="assets/images/clara.png"/>
              </div>
            </div>
          </section>
          <section id='/blog' className="w-full relative mt-10">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <Tittle title="Blog" center color={"#545c5c"}/>
              <p className="font-montserrat text-xl lg:text-2xl text-kaqui lg:w-4/5">Coming soon</p>
            </div>
          </section>
    </div>

  );
}

export default PrincipalPage