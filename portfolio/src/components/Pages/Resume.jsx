// This page will house my clickable and downloadable resume.
import "../../styles/Resume.css";

function Resume() {
    return (
        <section className="resume-content">
            <div className="resume-header">
            <h1>Resume:</h1>
            <a href="https://docs.google.com/document/d/1QKkubolsRJ5f-EszamvKNPAMFrNY9PFUMHPy5h9DFrU/edit?usp=sharing">View & Download</a>
            <p>
                If you have any further questions, please feel free to contact me.
            </p>
            </div>
            <div className='proficiencies'>
            <p>
               <h3>My proficiencies include:</h3> 
               <ul>
                    <h5>Frontend:</h5>
                     <li>HTML:  Proficient in writing semantic HTML markup to 
                        create the structure of web pages, ensuring accessibility and 
                        SEO best practices.
                        </li>
                     <li>CSS: Skilled in using CSS to style web pages, including layout 
                        design, responsiveness, and animation effects. Familiar with 
                        CSS preprocessors like Sass for efficient styling workflows.
                        </li>
                     <li>JavaScript: Experienced in JavaScript programming, including 
                        ES6+ features, DOM manipulation, and event handling. Proficient 
                        in writing clean, modular JavaScript code to enhance user 
                        interactivity and functionality.
                        </li>
                     <li>React: Proficient in building dynamic and interactive user 
                        interfaces using React.js. Experienced in state management, 
                        component lifecycle methods, and React Router for single-page 
                        applications.
                        </li>
                     <li>Bootstrap: Familiar with Bootstrap framework for rapid
                         prototyping and responsive web design. Skilled in utilizing
                          Bootstrap components and utilities to create modern and 
                          visually appealing UIs.
                    </li>
                    <li>Handlebars: Experienced in using Handlebars.js templating 
                        engine to generate dynamic HTML content with reusable templates. 
                        Proficient in integrating Handlebars with backend frameworks 
                        like Express.js for server-side rendering.
                    </li>
                    <li>jQuery: Proficient in jQuery library for simplifying DOM 
                        manipulation, event handling, and AJAX interactions. Skilled 
                        in optimizing jQuery code for improved performance and 
                        maintainability.
                        </li>
                        <br></br>
                     <h5>Backend:</h5>
                     <li>Node.js: Experienced in server-side JavaScript development
                         using Node.js runtime environment. Proficient in building
                          scalable and efficient backend applications with Node.js, 
                          including RESTful APIs and WebSocket servers.
                          </li>
                     <li>Express: Skilled in Express.js framework for building robust 
                        and scalable web applications and APIs. Experienced in middleware
                         integration, routing, error handling, and authentication 
                         mechanisms.
                         </li>
                     <li>MySQL: Experienced in relational database management using 
                        MySQL. Proficient in designing normalized database schemas, 
                        writing SQL queries, and optimizing database performance through 
                        indexing and query optimization techniques.
                        </li>
                     <li>MongoDB: Proficient in MongoDB NoSQL database for data storage 
                        and retrieval. Experienced in designing schema-less databases, 
                        performing CRUD operations, and utilizing MongoDB aggregation 
                        framework for complex queries.
                        </li>
                </ul>
            </p>
            </div>
        </section>
    );
}

export default Resume;