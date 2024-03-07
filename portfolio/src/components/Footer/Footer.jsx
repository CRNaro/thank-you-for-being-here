//  This is my Footer, it will have the creator of the page as links to my social media.

import 'bootstrap/dist/css/bootstrap.min.css'
import linkedInLogo from '../../assets/linked.webp';
import githubLogo from '../../assets/github.webp';
import instagramLogo from '../../assets/insta.webp';
import '../../styles/Footer.css';
import Card from 'react-bootstrap/Card';

function Footer() { 
    return (
        <Card style={{ position: 'sticky', width: '100%',  backgroundColor: 'rgb(250, 235, 215, .0)', border: 'none' }}>
            <Card.Body>
    <div>
        <footer className="footer-class m-3 p-3 rounded">
            <ul className="footer-list d-flex justify-content-center">
                <li>
                    <Card style={{ width: '5rem', backgroundColor: 'rgb(250, 235, 215, .6)' }}>   
                    <Card.Body>
            <a href="https://www.linkedin.com/in/christopher-naro-0b0a3a1b3/">
                <img className="logo-card" src={linkedInLogo} style={{width: '100%', height: '100%', backgroundColor: 'rgb(250, 235, 215, .1)'}}/></a>
                </Card.Body>
                </Card>
                </li>
                <li>
                    <Card style={{ width: '5rem',  backgroundColor: 'rgb(250, 235, 215, .6)' }}>
                    <Card.Body>
            <a href="https://www.github.com/CRNaro">
                <img className="logo-card" src={githubLogo} style={{width: '100%', height: '100%', backgroundColor: 'rgb(250, 235, 215, .1)'}}/></a>
                </Card.Body>
                </Card>
                </li>
                <li>
                <Card style={{ width: '5rem',  backgroundColor: 'rgb(250, 235, 215, .6)' }}>
                    <Card.Body>
            <a href="https://instagram.com/christopher.r.naro/">
               <img className="logo-card" src={instagramLogo} style={{width: '100%', height: '100%', backgroundColor: 'rgb(250, 235, 215, .1)'}}/></a>
                 </Card.Body>
                </Card>
                </li>
    </ul>
            <p className="footer-text">Created by Christopher Naro</p>
        </footer>
    </div>
    </Card.Body>
    </Card>
    );
}

export default Footer