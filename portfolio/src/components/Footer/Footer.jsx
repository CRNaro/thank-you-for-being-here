//  This is my Footer, it will have the creator of the page as links to my social media.

import 'bootstrap/dist/css/bootstrap.min.css'
import linkedInLogo from '../../assets/linkedin-bug.png';
import githubLogo from '../../assets/github-mark.png';
import instagramLogo from '../../assets/instagram.png';
import '../../styles/Footer.css';

function Footer() { 
    return (
    <div>
        <footer className="footer-class m-3 p-3 rounded">
            <ul className="footer-list d-flex justify-content-center">
                <li className="mx-1">
            <a href="https://www.linkedin.com/in/christopher-naro-0b0a3a1b3/">
                <img className="linkedin-icon" src={linkedInLogo}/></a>
                </li>
                <li className="mx-0">
            <a href="https://www.github.com/CRNaro">
                <img className="github-icon" src={githubLogo}/></a>
                </li>
                <li className="mx-5">
            <a href="https://instagram.com/christopher.r.naro/">
               <img className="insta-icon" src={instagramLogo}/></a>
                </li>
            </ul>
            <p className="footer-text">Created by Christopher Naro</p>
        </footer>
    </div>
    );
}

export default Footer