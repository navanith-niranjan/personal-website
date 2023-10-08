const ProjectsList = ({ selectedCategory }) => {
    
    const projects = [
        {
            id: 1,
            projImg: 'fixup-home.jpg',
            name: 'fixup - workout tracker app w/ gpt-3 ai',
            date: 'ongoing',
            description: 'developed a full-stack fitness tracking app with an integrated gpt-3 ai recommendation engine, providing personalized workout suggestions. this app offers user authentication, a user-friendly interface, and data storage using a mysql database for both ios and android platforms.',
            techStack: ['django', 'react native', 'mysql', 'python', 'javascript', 'postman'],
            link1: ["github.svg", "https://github.com/navanith-niranjan/workout-tracker-app"],
            link2: ["youtube.svg", ""],
            category: 'software',
        },
        {
            id: 2,
            projImg: 'websitephoto.jpg',
            name: 'personal website',
            date: 'june 2023',
            description: '',
            techStack: ['react', 'javascript', 'html', 'css'],
            link1: ["github.svg", "https://github.com/navanith-niranjan/personal-website"], 
            link2: ["arrow.svg", "https://navanithniranjan.com"],
            category: 'software',
        },
        {
            id: 3,
            projImg: 'testfixture.jpg',
            name: 'test fixture',
            date: 'april 2022',
            description: 'designed a test fixture to measure lateral runout of the key components within the main systems. it is used to ensure current parts are suitable for testing and helps drive the design and manufacturing of new parts.',
            techStack: ['inventor', 'gd&t', 'dfm/a'],
            category: 'mechanical',
        },
        {
            id: 4,
            projImg: 'irrigation.jpg',
            name: 'automated garden irrigation system',
            date: 'may 2021',
            description: 'implemented an automated garden irrigation system using an arduino alongside moisture sensors and relays. the system consistently maintained optimal moisture levels, resulting in a remarkable 25% reduction in water consumption compared to conventional watering methods.',
            techStack: ['arduino'],
            link1: ["youtube.svg", "https://youtu.be/-Ic1QbbCKp4?si=pOYaCuA5AlYaEkH6"],
            category: 'mechanical',
        },
    ];
    
    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'all projects') {
          return true; 
        } 
        else {
          return project.category === selectedCategory;
        }
      });

    return (
        <div className="projects-container">
            {filteredProjects.map((project) => (
                <div className="project-card" key={project.id}>
                    <img src={project.projImg} alt={project.name} />
                    <div className="project-info">
                        <h2>{project.name}</h2>
                        <p>{project.date}</p>
                        <p>{project.description}</p>
                        <p>{project.techStack.join(', ')}</p>
                        <div className="proj-links">
                            {project.link1 && (
                                <a href={project.link1[1]} target="_blank">
                                    <img src={project.link1[0]} alt='link 1' />
                                </a>
                            )}
                            {project.link2 && (
                                <a href={project.link2[1]} target="_blank">
                                    <img src={project.link2[0]} alt='link 2' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectsList;