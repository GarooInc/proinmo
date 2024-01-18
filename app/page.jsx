import Image from "next/image";
import projects from "@/projects";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import Tittle from "@/components/Tittle/Tittle";
import ContactItem from "@/components/ContactItem/ContactItem";
import NavBar from "@/components/NavBar/NavBar";
import Description from "@/components/Description/Description";
import ButtonDark from "@/components/ButtonDark/ButtonDark";

const PrincipalPage = () => {

  return (
    <div className="w-full isolate pt-20">
      <NavBar />
      <section id='/' className="relative bg-cover py-60 flex flex-col justify-center items-center w-full mt-4 overlay px-8 lg:px-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className='lg:text-6xl text-4xl text-white text-center font-bold text-montserrat z-10'>Ideas que generan proyectos</span>
          <Description text="The CAES Industrial Park developed by Idea Central is the developer's largest and most ambitious project, which will become the logistics ecosystem of Carretera a El Salvador." color="#fff"/>
          <ButtonDark text="Conoce más"/>
        </div>
      </section>
        <div className="px-8 lg:px-10">
          <section id='/projects' className="w-full relative py-10 flex flex-col justify-center items-center">
            <Tittle title="Proyectos" center color={"#545c5c"}/>
            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" color="#545c5c"/>
            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center my-10">
            {
              projects.map((project) => (
                <ProjectItem key={project.title} project={project} />
              ))
            }
            </div>
            <ButtonDark text="Ver todos los proyectos"/>
          </section>
          <section id='/about' className="w-full relative py-10">
            <div className="w-full flex flex-col justify-center text-center items-center">
              <Image src="/assets/images/fulllogo01.png" width={200} height={200} alt="logo" />
              <span className="font-inter text-xl lg:text-2xl text-kaqui lg:w-4/5">En Proinmo, creemos en la magia de transformar sueños en realidades tangibles. Como una empresa líder en el sector inmobiliario, nos dedicamos a convertir las ideas y aspiraciones de nuestros clientes en propiedades concretas. Nuestra pasión reside en la creación de espacios que no solo satisfacen necesidades, sino que también inspiran y enriquecen vidas. </span>
            </div>
          </section>
          <section id='/contact' className="w-full relative mt-10">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <Tittle title="Con Proinmo, tus sueños se convierten en ideas" center color={"#545c5c"}/>
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
                <ContactItem name="Clara Irving Bell" number="50005536" mail="clara@proinmo502.com" />
                <ContactItem name="Catherine Irving Bell" number="30152080" mail="catherine@proinmo502.com " />
              </div>
            </div>
          </section>
          <section id='/blog' className="w-full relative mt-10">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <Tittle title="Blog" center color={"#545c5c"}/>
              <p className="font-inter text-xl lg:text-2xl text-kaqui lg:w-4/5">Coming soon</p>
            </div>
          </section>
        </div>
    </div>

  );
}

export default PrincipalPage