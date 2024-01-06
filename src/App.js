import './Navbar.css';
import Navbar from './Navbar';

import './Socialbar.css';
import Socialbar from './Socialbar';

import './ProjectsList.css';
import ProjectsList from './ProjectsList';

import './ContactForm.css'
import ContactForm from './ContactForm'

import Changingtext from './Changingtext';

import pythonicon from './icons/python.svg';
import javascripticon from './icons/javascript.svg';
import reacticon from './icons/react.svg';
import cplusplusicon from './icons/cplusplus.svg';
import mysqlicon from './icons/mysql.svg';
import djangoicon from './icons/django.svg';

import React, { useState } from 'react';

function App() {

  const techStack = [
    { icon: pythonicon, text: 'python' },
    { icon: javascripticon, text: 'javascript' },
    { icon: cplusplusicon, text: 'c++' },
    { icon: mysqlicon, text: 'mysql' },
    { icon: djangoicon, text: 'django' },
    { icon: reacticon, text: 'react' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all projects');

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
    
      <Navbar />
      <Socialbar />

      <div className ="footer">
        <div className ="boxborder"></div>
      </div>

      <div className="copyright">
        &copy; 2023 Navanith Niranjan. All Rights Reserved.
      </div>

      <section id="Home">
          <div className="homecontents">
              <p id="title">Navanith Niranjan</p>
              <Changingtext />
              <div id="description">
                <p>i am a fourth-year <span className='green-text'>mechanical engineering</span> ⚙️ student at the <span className='yellow-text'>university of waterloo</span> 🏫. 
                my passion for technology and problem-solving has naturally led me to pursue a career
                in the <span className='blue-text'>tech industry</span> 💻.</p>
                
                <p>i am proficient in:</p>
                <div className="tech-stack">
                  {techStack.map((item, index) => (
                    <div className='tech-icon-item'>
                      <img className="tech-icon-img" src={item.icon}></img>
                      <p className='tech-icon-text'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
      </section>

      <section id="Projects">
          <nav className='project-tabs'>
            <li className={selectedCategory === 'all projects' ? 'selected' : ''} onClick={() => filterProjects('all projects')}>all projects</li>
            <li className={selectedCategory === 'software' ? 'selected' : ''} onClick={() => filterProjects('software')}>software</li>
            <li className={selectedCategory === 'mechanical' ? 'selected' : ''} onClick={() => filterProjects('mechanical')}>mechanical</li>
          </nav>
          <ProjectsList selectedCategory={selectedCategory}/>
      </section>
 
      <section id="Contact">
          <ContactForm />
      </section>

    </div>
  );
}

export default App;
