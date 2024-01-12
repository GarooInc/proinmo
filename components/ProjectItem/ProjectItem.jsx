
const ProjectItem = ({ project }) => {
    return (
        <div className="glassmorphism lg:w-1/3 m-2">
            <div className="flex flex-col items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-60 rounded-lg object-cover" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-inter text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{project.title}</h1>
                    <p className="font-inter text-lg text-grayish text-center mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer" className="font-inter rounded-md bg-kaqui p-2 px-6 lg:px-8 text-sm font-semibold text-white shadow-sm hover:bg-dark-grayish focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garoo-sky">Ver más</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem