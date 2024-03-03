// Main page when loading the site
import '../../styles/Home.css';
import selfImg from '../../assets/CRN.jpeg';

function Home() {
    return (
        <div>
              <img class="header-img" src={selfImg} alt="Christopher Naro"  />
            <h1>Home</h1>
            <p>
                Welcome to my portfolio site. Here you can learn more about me and see some of the projects I have worked on.
            </p>
        </div>
    );
}

export default Home;