import SwiperSlides from "@/components/SwiperSlides/SwiperSlides";
import Image from "next/image";
import projects from "@/projects";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import ButtonDark from "@/components/ButtonDark/ButtonDark";
import Tittle from "@/components/Tittle/Tittle";
import Footer from "@/components/Footer/Footer";

const PrincipalPage = () => {

  const imgHome = [
    {
      id: 1,
      img: '/assets/imagesHome/5.png',
      quote: 'Ideas que generan proyectos...',
    },
    {
      id: 2,
      img: '/assets/imagesHome/1.png',
    },
    {
      id: 3,
      img: '/assets/imagesHome/2.png',
    },
    {
      id: 4,
      img: '/assets/imagesHome/3.png',
    }
  ]

  return (
    <div className="w-full isolate pt-20">
        <section id='/' className="w-full relative mt-6">
          <SwiperSlides imgProyects={imgHome} />
        </section>
        <div className="px-8 lg:px-10">
          <section id='/about' className="w-full relative py-10">
            <div className="w-full flex flex-col justify-center text-center items-center">
              <Image src="/assets/images/fulllogo01.png" width={200} height={200} />
              <span className="font-inter text-xl lg:text-2xl text-kaqui lg:w-4/5">En Proinmo, creemos en la magia de transformar sueños en realidades tangibles. Como una empresa líder en el sector inmobiliario, nos dedicamos a convertir las ideas y aspiraciones de nuestros clientes en propiedades concretas. Nuestra pasión reside en la creación de espacios que no solo satisfacen necesidades, sino que también inspiran y enriquecen vidas. </span>
            </div>
          </section>
          <section id='/projects' className="w-full relative py-10">
            <Tittle title="Proyectos" center color={"#545c5c"}/>
            <div className="w-full flex flex-col lg:flex-row">
            {
              projects.map((project) => (
                <ProjectItem key={project.title} project={project} />
              ))
            }
            </div>
          </section>
          <section id='/contact' className="w-full relative mt-10">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <Tittle title="Con Proinmo, tus sueños se convierten en ideas" center color={"#545c5c"}/>
              <ButtonDark text="Contáctar" />
            </div>
          </section>
          <Footer />
        </div>
    </div>

  );
}

export default PrincipalPage