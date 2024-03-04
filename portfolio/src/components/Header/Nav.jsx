//  This is my nav bar that I want to keep consistent across all pages.
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
    return (
        <nav>

            <Link to="/">Home/AboutMe</Link>
           {/* <Link to="/aboutme#about-me">About</Link>   will need to change back to <Link to="/aboutme">About</Link> */}
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
           
        </nav>
    );
}

export default Nav