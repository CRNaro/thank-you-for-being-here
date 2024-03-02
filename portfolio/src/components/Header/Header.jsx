//  This is my Header, which will hold my name and navigation links.
// Note: with React 17 we no longer need to import React into every component file.   
import '../../styles/Header.css';
import './Nav.jsx';
import Nav from './Nav.jsx';
import selfImg from '../../assets/CRN.jpeg';

function Header() {
    return (
        <header>
        <img class="header-img" src={selfImg} alt="Christopher Naro"  />
            <div>
        <h1>Christopher </h1>
        <h1 class='last-name'>Naro</h1>
        </div>
        <Nav />
        </header>
    )
}

export default Header