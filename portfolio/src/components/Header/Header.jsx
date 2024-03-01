//  This is my Header, which will hold my name and navigation links.
// Note: with React 17 we no longer need to import React into every component file.   
import '../../styles/Header.css';
import './Nav.jsx';
import Nav from './Nav.jsx';

function Header() {
    return (
        <header>
        <h1>Christopher R. Naro</h1>
        <Nav />
        </header>
    )
}

export default Header