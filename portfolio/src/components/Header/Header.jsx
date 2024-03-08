//  This is my Header, which will hold my name and navigation links.
// Note: with React 17 we no longer need to import React into every component file.   
import './Nav.jsx';
import Nav from './Nav.jsx';
import '../../styles/Header.css';


function Header() {
    return (
        <header>
            <div>
        <h1>Christopher </h1>
        <h1 className='last-name'>Naro</h1>
        </div>
        <Nav />
        </header>
    )
}

export default Header