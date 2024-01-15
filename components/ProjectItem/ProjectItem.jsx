"use client";
import { useRouter } from "next/navigation";

const ProjectItem = ({ project }) => {
    const router = useRouter();

    const handleMoreClick = () => {
        router.push('/projects-details/' + project.id); // Asume que tienes una ruta así definida
    };

    return (
        <div className="glassmorphism lg:w-1/4 m-2 max-h-96">
            <div className="flex flex-col items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-60 rounded-lg object-cover" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-inter text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{project.title}</h1>
                    <span className="cursor-pointer font-inter rounded-md bg-kaqui p-2 px-6 lg:px-8 text-sm font-semibold text-white shadow-sm hover:bg-dark-grayish focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garoo-sky" onClick={handleMoreClick}>Ver más</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
