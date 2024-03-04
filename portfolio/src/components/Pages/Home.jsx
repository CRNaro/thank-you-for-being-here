// Main page when loading the site
import '../../styles/Home.css';
import selfImg from '../../assets/CRN.jpeg';

function Home() {
    return (
        <div class="welcome-content">
              <img class="header-img" src={selfImg} alt="Christopher Naro"  />
              <div >
            <h1>Welcome to Christopher R Naro's Professional Webpage</h1>
            <p>
            
Dear Visitor,
<br/>
Welcome, and thank you for taking the time to visit my professional webpage. 
I am genuinely grateful for your interest in getting to know me and exploring 
my work. 
<br/>
In a world filled with endless options, the fact that you've chosen to spend 
your valuable time here means a great deal to me. Whether you're a colleague, 
a potential collaborator, or simply curious about what I have to offer, I am 
honored by your presence.
<br/>
This webpage is not just a collection of information about my career and
accomplishments; it's a reflection of my passion, dedication, and commitment 
to growing and learning in all facets of my life. This is a platform where I strive 
to showcase my skills, experiences, and the projects that I'm truly proud of.
As you navigate through these pages, I hope you'll gain insight into who I am 
as a professional and as an individual. Whether you're seeking collaboration 
opportunities, exploring potential partnerships, or simply looking to connect, 
I'm excited about the possibility of us crossing paths and creating meaningful 
connections.
<br/>
Once again, thank you for stopping by. Your visit is appreciated more than words 
can express. Please feel free to reach out if you have any questions or if 
there's anything I can assist you with.
<br/>
Warm regards,
<br/>
Christohper R Naro
            </p>
            </div>
        </div>
    );
}

export default Home;