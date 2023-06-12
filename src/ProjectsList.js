import { useState } from 'react';

const ProjectsList = () => {
    
    const [projects, setProjects] = useState([
        { title: 'navanithniranjan.com', date: "may 2023", body: 'a portfolio website built using reactjs. it was an opportunity to learn front-end web development.', pic: 'project1.jpg', techstack: ['html', 'css', 'javascript', 'react'], id: 1 },
        { title: 'alumapower test fixture', date: "april 2022", body: 'designed a test fixture to measure lateral runout of the key components within the main systems. it is used to ensure current parts are suitable for testing and helps drive the design and manufacturing of new parts.', pic: 'project2.jpg', techstack: ['inventor', 'gd&t', 'dfm/a'], id: 2 }
    ]);
    
    return (  
        <div className="projects-list">
            {projects.map((project) => (
                <div className="projects-item" key={project.id}>
                    <img className="project-image" src={project.pic} alt={"Project "+ project.id}></img>
                    <div className="project-desc">
                        <p className="proj-title">{project.title}</p>
                        <p className="date">{project.date}</p>
                        <p className="proj-body">{project.body}</p>
                    </div>
                    <div className="proj-techstack">
                        {project.techstack.map((stack) => <p className='stack-item'>{stack}</p>)}
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectsList;