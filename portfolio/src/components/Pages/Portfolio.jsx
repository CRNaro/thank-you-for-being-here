//  This page will house my portfolio of projects.
import "../../styles/Portfolio.css";

const projects = [
    {
        name: 'Project 1 ',
        description: 'This is a really cool project',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://github.com'
    },
    {
        name: 'Project 2 ',
        description: 'This is a really cool project',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://github.com'
    },
    {
        name: 'Project 3 ',
        description: 'This is a really cool project',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://github.com'
    },
    {
        name: 'Project 4 ',
        description: 'This is a really cool project',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://github.com'
    },
    {
        name: 'Project 5 ',
        description: 'This is a really cool project',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://github.com'
    },
    {
        name: 'Project 6 ',
        description: 'This is a really cool project',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://github.com'
    }
];
// <img src={project.image} alt={project.name} /> needs to be added under <div key{index}
function Portfolio() {
    return (
<div className="container mx-auto px-4">
    <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
            <div key={index} className="card shadow-lg w-64 h-64">
               
                <div className="m-4">
                    <span className="font-bold">{project.name}</span>
                    <span className="block text-gray-500 text-sm">{project.description}</span>
                    <a href={project.githublink} className="block text-blue-500 hover:underline">Github</a>
                </div>
            </div>
        ))}
        </div>
    </div>
);
}

export default Portfolio;