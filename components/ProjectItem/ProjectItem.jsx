"use client";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";


const ProjectItem = ({ project }) => {
    const router = useRouter();

    const handleMoreClick = () => {
        router.push('/projects-details/' + project.id); // definimos la ruta a la que queremos ir
    };

    return (
        <div className="glassmorphism lg:w-1/4 m-2 h-96">
            <div className="flex flex-col items-center justify-between">
                <img src={project.image} alt={project.title} className="w-full h-60 rounded-lg object-cover" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-inter text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{project.title}</h1>
                    <FaArrowAltCircleRight className="text-4xl text-kaqui cursor-pointer absolute bottom-4 right-2" onClick={handleMoreClick} />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
