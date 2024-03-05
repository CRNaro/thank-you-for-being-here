// This page will house my clickable and downloadable resume.

function Resume() {
    return (
        <section>
            <h1>Resume:</h1>
            <a href="https://docs.google.com/document/d/1QKkubolsRJ5f-EszamvKNPAMFrNY9PFUMHPy5h9DFrU/edit?usp=sharing">View & Download</a>
            <p>
                If you have any further questions, please feel free to contact me.
            </p>
            <div className='proficiencies'>
            <p>
               <h3>My proficiencies include:</h3> 
               <ul>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React</li>
                     <li>Node</li>
                     <li>Express</li>
                     <li>MySQL</li>
                     <li>MongoDB</li>
                     <li>Bootstrap</li>
                     <li>Handlebars</li>
                     <li>jQuery</li>
               </ul>
            </p>
            </div>
        </section>
    );
}

export default Resume;