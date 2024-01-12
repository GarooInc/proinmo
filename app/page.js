import SwiperSlides from "@/components/SwiperSlides/SwiperSlides";
import Image from "next/image";

const PrincipalPage = () => {

  const imgHome = [
    {
      id: 1,
      img: '/assets/imagesHome/1.png',
    },
    {
      id: 2,
      img: '/assets/imagesHome/2.png',
    },
    {
      id: 3,
      img: '/assets/imagesHome/3.png',
    }
  ]

  return (
    <div className="w-full isolate px-8 pt-20 lg:px-10">
        <section id='/' className="w-full relative mt-6">
          <SwiperSlides imgProyects={imgHome} />
        </section>
        <section id='/about' className="w-full relative py-10">
          <div className="w-full flex flex-col justify-center text-center items-center">
            <Image src="/assets/images/fulllogo01.png" width={200} height={200} />
            <span className="text-2xl text-kaqui lg:w-4/5">En Proinmo, creemos en la magia de transformar sueños en realidades tangibles. Como una empresa líder en el sector inmobiliario, nos dedicamos a convertir las ideas y aspiraciones de nuestros clientes en propiedades concretas. Nuestra pasión reside en la creación de espacios que no solo satisfacen necesidades, sino que también inspiran y enriquecen vidas. </span>
          </div>
        </section>
        <section id='/projects' className="w-full relative py-10">
          <h1 className="text-4xl font-bold text-grayish text-center">Nuestros Proyectos</h1>
        </section>
        <section id='/contact' className="w-full relative mt-10">
          <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
        </section>
    </div>

  );
}

export default PrincipalPage