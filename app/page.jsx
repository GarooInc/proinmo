import FullProjects from "@/components/FullProjects/FullProjects";
import Tittle from "@/components/Tittle/Tittle";
import ContactItem from "@/components/ContactItem/ContactItem";
import NavBar from "@/components/NavBar/NavBar";
import ButtonDark from "@/components/ButtonDark/ButtonDark";
import projects from "@/projects";
import Blog from "@/components/Blog/Blog";

const PrincipalPage = () => {

  return (
    <div className="w-full isolate pt-20">
      <NavBar />
      <section id='/' className="relative bg-cover py-60 flex flex-col justify-center items-center w-full mt-4 overlay px-8 lg:px-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className='lg:text-6xl text-4xl text-white text-center font-bold font-montserrat z-10'>Espacios Logísticos e Industriales</span>
          <img className="w-32 h-32 z-10" src="assets/images/biglogo01.png" alt="logo"/>
          <ButtonDark text="Conoce más" href={'https://proinmo502.com/'} />
        </div>
      </section>
          <section id='/projects' className="w-full relative py-10 px-8 lg:px-10 flex flex-col items-center">
            <Tittle title="Proyectos" center color={"#545c5c"}/>
            <p className=" text-lg lg:text-xl text-center text-grayish font-montserrat w-full lg:w-2/3">Establecemos alianzas estratégicas con los desarrolladores, planificadores y constructores más destacados del país para garantizar una oferta diversificada y adaptada a las necesidades específicas de cada cliente.</p>
            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center my-10">
              <FullProjects projects={projects} />
            </div>
          </section>
          <section id='/about' className="w-full relative pt-10 lg:pb-20 xs:h-screen lg:h-full">
          <img className="w-full lg:h-[600px] h-[400px] object-cover brightness-50" src="assets/images/about.png" alt="about"/>
            <div className="w-full flex flex-col justify-center text-center items-center px-8 lg:px-10">
              <div className="bg-white sm:w-3/5 lg:w-3/5 xs:w-auto xs:mx-6 flex flex-col justify-start items-start shadow-lg lg:px-10 px-6 py-20 lg:py-28 absolute lg:top-1/4 top-40">
                <Tittle title="En Proinmo" center color={"#545c5c"}/>
                <span className="font-montserrat text-[18px] sm:text-xl lg:text-xl sm:leading-tight text-kaqui text-start "> Nos especializamos en la comercialización de propiedades y desarrollos industriales que impulsan el crecimiento de las empresas en Guatemala. Con una sólida experiencia de más de 10 años en el sector inmobiliario industrial, nos destacamos por ofrecer a nuestros clientes opciones que se alinean perfectamente con sus objetivos empresariales.</span>
                <span className="font-montserrat text-[18px] sm:text-xl lg:text-xl  sm:leading-tight text-kaqui text-start my-2">Nuestra cartera incluye bodegas y parques logísticos en diversas ubicaciones estratégicas en todo el país. Nos distinguimos por nuestras alianzas estratégicas con los principales desarrolladores, planificadores y constructores, asegurando así que nuestros clientes tengan acceso a las mejores soluciones inmobiliarias adaptadas a sus necesidades específicas.</span>
                <img className="lg:w-32 lg:h-32 w-20 h-20 absolute right-0 bottom-0" src="assets/images/biglogo01.png" alt="signature"/>
              </div>
            </div>
          </section>
          <section id='/contact' className="w-full relative xs:pt-10 sm:p-0 lg:mt-20 xl:p-0 top-20">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
                <ContactItem name="Clara Irving Bell" number="+(502) 5000-5536" mail="clara@proinmo502.com" img="assets/images/clara.png"/>
                <ContactItem name="Catherine Irving Bell" img="assets/images/catherine.png" number="+(502) 3015-2080" mail="catherine@proinmo502.com"/>
              </div>
            </div>
          </section>
          <section id='/blog' className="w-full relative mt-10">
            <div className="w-full flex flex-col justify-center text-center items-center p-10 gap-4">
              <Tittle title="Nuestro Blog" center color={"#545c5c"}/>
              <Blog />
            </div>
          </section>
    </div>

  );
}

export default PrincipalPage