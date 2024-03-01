//  This is my nav bar that I want to keep consistent across all pages.
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
              {/*} <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#resume">Resume</a></li>
    <li><a href="#contact">Contact</a></li> */}
           
        </nav>
    );
}

export default Nav