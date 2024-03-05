//  This page will house my portfolio of projects.
import "../../styles/Portfolio.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const projects = [
  {
    name: "Project 1 ",
    description: "This is a really cool project",
    image: "https://via.placeholder.com/150",
    githublink: "https://github.com",
  },
  {
    name: "Project 2 ",
    description: "This is a really cool project",
    image: "https://via.placeholder.com/150",
    githublink: "https://github.com",
  },
  {
    name: "Project 3 ",
    description: "This is a really cool project",
    image: "https://via.placeholder.com/150",
    githublink: "https://github.com",
  },
  {
    name: "Project 4 ",
    description: "This is a really cool project",
    image: "https://via.placeholder.com/150",
    githublink: "https://github.com",
  },
  {
    name: "Project 5 ",
    description: "This is a really cool project",
    image: "https://via.placeholder.com/150",
    githublink: "https://github.com",
  },
  {
    name: "Project 6 ",
    description: "This is a really cool project",
    image: "https://via.placeholder.com/150",
    githublink: "https://github.com",
  },
];

function Portfolio() {
    return (
        <section className="portfolio-section">
      <div className="container">
        <div className="row">
        <CardGroup>
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="shadow">
              <Card.Img variant="top" src={project.image} alt={project.name} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.githublink}>GitHub</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
        </div>
        <div className="row">
        <CardGroup>
            {projects.slice(3, 6).map((project, index) => (
                <Card key={index} className="shadow">
                    <Card.Img variant="top" src={project.image} alt={project.name} />
                    <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.githublink}>GitHub</Card.Link>
                    </Card.Body>
                </Card>
                ))}
        </CardGroup>
        </div>
      </div>
    </section>
    );
  }

export default Portfolio;

//my bootstrap stuff:
{
  /* <div key={index} className="card shadow-lg">
 <div className="aspect-w-1 aspect-h-1">
<img src={project.image} alt={project.name} />
</div>
<div className="m-4">
    <span className="font-bold">{project.name}</span>
    <span className="block text-gray-500 text-sm">{project.description}</span>
    <a href={project.githublink} className="block text-blue-500 hover:underline">Github</a>
</div>
</div>  */
}

{
  /* <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
     <div className="aspect-w-1 aspect-h-1">
       <img className="w-full h-full object-cover" src={project.image} alt={project.name} />
     </div>
     <div className="p-4">
       <span className="font-bold">{project.name}</span>
       <span className="block text-gray-500 text-sm">{project.description}</span>
       <a href={project.githublink} className="block text-blue-500 hover:underline">Github</a> */
}
