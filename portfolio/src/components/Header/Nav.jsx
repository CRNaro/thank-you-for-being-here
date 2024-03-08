//  This is my nav bar that I want to keep consistent across all pages.
import { useLocation,NavLink } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
    const location = useLocation();
    return (
        <nav className="nav-links">
            <NavLink to="/" className={location.pathname === "/" ? "active-link" : ""}>Home/AboutMe</NavLink>
           {/* <Link to="/aboutme#about-me">About</Link>   will need to change back to <Link to="/aboutme">About</Link> */}
            <NavLink to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>Contact</NavLink>
            <NavLink to="/portfolio" className={location.pathname === "/portfolio" ? "active-link" : ""}>Portfolio</NavLink>
            <NavLink to="/resume" className={location.pathname === "/resume" ? "active-link" : ""}>Resume</NavLink>
           
        </nav>
    );
}

export default Nav