// This page will be the keeper of my About Me section
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/AboutMe.css";
import "../../styles/Home.css";
import selfImg from '../../assets/CRN.jpeg';

function AboutMe() {
    // NOTE: Tried to make the scroll work when clicking on 'about', will need to work
    // on this later
    // const location = useLocation();
    // useEffect(() => {
    //     if (location.hash) {
    //         let element = document.getElementById(location.hash.slice(1)); //substring(1) removes the # at the beginning of the hash
    //     if (element) {
    //         setTimeout(() => {
    //         element.scrollIntoView({ top: 0, left: 0, behavior: "smooth" });
    //         }, 0);
    //     }
    //     } else {
    //         window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    //     }
    // }, [location,]);

  return (
    
   
    <section className="about-me-content">
        <img className="header-img" src={selfImg} alt="Christopher Naro"  />
        <h1>Welcome</h1>
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
      <h1 id="about-me">About Me</h1>
      <div className="mask"></div>
      <p>
        As a passionate Full Stack Web Development student at UNH Coding Boot
        Camp, I am on a journey to transition my career from an accomplished
        Head Brewer with over a decade of experience in the brewing industry to
        a dynamic role in web development. My background in brewing has
        instilled in me a deep appreciation for the craft of creating, a
        meticulous attention to detail, and a relentless pursuit of quality and
        innovation. These attributes, combined with my current educational
        endeavor in coding, have equipped me with a unique set of skills and a
        fresh perspective that I am eager to apply in the tech industry.
      </p>
      Born and raised, New Hampshire, I have always been drawn to the arts and
      sciences. I completed my Bachelor of Arts Degree in Fine Art Studio with a
      focus in Drawing, and minors in Art History & Photography at Plymouth
      State University. This educational foundation has not only honed my
      creative skills but also developed my ability to think critically and
      solve complex problems. It was during my time in the brewing industry that
      I discovered my passion for continuous learning and growth, leading me to
      pursue a career in web development.
      <p />
      <p>
        Throughout my eleven years in professional brewing, I have mastered the
        intricacies of brew chemistry, recipe building, and leading diverse
        teams. My roles at SoMe/York Beach Brewing Co and Throwback Brewery have
        allowed me to make significant contributions to the industry, including
        market analysis, product development, and ensuring the highest quality
        of production. My experiences have taught me the importance of
        adaptability, teamwork, and the pursuit of excellence—qualities that are
        equally essential in the fast-paced world of technology.
      </p>
      <p>
        Currently enhancing my technical skills through the Full Stack Web
        Development Boot Camp at UNH, I have gained proficiency in key
        technologies such as HTML, CSS, JavaScript, and various database
        management systems. My ambition is to leverage my background in brewing
        and my newfound coding skills to contribute to innovative web
        development projects. I am particularly drawn to roles that offer
        opportunities for creative problem-solving, continuous learning, and
        personal and professional growth.
      </p>
      <p>
        I am excited about the prospect of bringing my unique blend of
        creativity, technical skills, and industry experience to a new challenge
        in the tech world. My journey from art to brewing and now to web
        development is a testament to my passion for learning and my dedication
        to mastering new crafts. I am looking forward to contributing to a team
        where I can continue to grow, innovate, and make a meaningful impact.
      </p>
      Connect with me through <Link to="/contact">Contact Page</Link> on this
      site or LinkedIn to discuss how I can bring my diverse skill set and fresh
      perspective to your team. I would be happy to provide my email to serious
      recruitment leads. Thank you for taking the time to read my profile and
      get to know me.
      <div className="mask mask-bottom"></div>
    </section>

  );
}


export default AboutMe;
