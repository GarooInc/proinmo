"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";


const ProjectItem = ({ project }) => {
    const router = useRouter();

    const handleMoreClick = () => {
        router.push('/projects-details/' + project.id); // definimos la ruta a la que queremos ir
    };

    return (
        <button onClick={handleMoreClick} className="project_card lg:w-1/4 m-2 h-66 relative w-full">
            <div className="flex flex-col items-center justify-between">
                <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                <div className="flex items-center justify-between w-full p-4">
                    <h1 className="text-white font-inter text-lg lg:text-lg font-bold text-start">{project.title}</h1>
                    <IoIosArrowForward className="text-2xl text-white cursor-pointer" onClick={handleMoreClick} />
                </div>
            </div>
        </button>
    )
}

export default ProjectItem
