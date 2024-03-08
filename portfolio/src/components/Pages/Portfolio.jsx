//  This page will house my portfolio of projects.
//import "../../styles/Portfolio.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import githubLogo from '../../assets/github-mark.png';
import DnD from '../../assets/DnD.png';
import WeatherApp from '../../assets/weather.png';
import WetMyPlants from '../../assets/wetmyplants.png';
import PencilMeIn from '../../assets/pencilmein.png';
import Mondays from '../../assets/mondays.png';
import Password from '../../assets/password.png';
import "../../styles/Portfolio.css";

const projects = [
{
        name: "D&D Stat Compiler ",
        description: "Create a Dungeons & Dragons character and compile their stats.",
        image: DnD,
        githublink: "https://github.com/CRNaro/dnd-stat-compiler.git",
},
  {
    name: "How About That Weather ",
    description: "My weather app that utilizes the OpenWeather API to display the current weather in a city.",
    image: WeatherApp,
    githublink: "https://github.com/CRNaro/how-about-that-weather-06.git",
  },
  {
    name: "I Wet My Plants",
    description: "Create a database of plants and their care instructions.  Never let another plant die on your watch!",
    image: WetMyPlants,
    githublink: "https://github.com/CRNaro/group-project-02.git",
  },
  {
    name: "Pencil Me In",
    description: "A simple calendar app that allows you to schedule events and keep track of your day.",
    image: PencilMeIn,
    githublink: "https://github.com/CRNaro/pencil-me-in-05.git",
  },
  {
    name: "Case of the Mondays",
    description: "A command-line application designed to manage a company's employee database.",
    image: Mondays,
    githublink: "https://github.com/CRNaro/case-of-the-mondays-12.git",
  },
  {
    name: "Bring Me The Password",
    description: "A password generator that allows you to create a secure password for your accounts.",
    image: Password,
    githublink: "https://github.com/CRNaro/bring-me-the-pw-03.git",
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
                <Card.Link href={project.githublink}><img className="github-icon" src={githubLogo}/></Card.Link>
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
                    <Card.Link href={project.githublink}><img className="github-icon" src={githubLogo}/></Card.Link>
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
