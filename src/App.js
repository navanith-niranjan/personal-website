import './Navbar.css';
import Navbar from './Navbar';

import './Socialbar.css';
import Socialbar from './Socialbar';

import './ProjectsList.css';
import ProjectsList from './ProjectsList';

import './ContactForm.css'
import ContactForm from './ContactForm'

import Changingtext from './Changingtext';

import { useState, useRef, useEffect } from "react";
import { useIntersection } from "react-use";

function App() {

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  const intersection1 = useIntersection(sectionRef1, options);
  const intersection2 = useIntersection(sectionRef2, options);
  const intersection3 = useIntersection(sectionRef3, options);

  const [isVisible,setisVisible] = useState(["hide","hide","hide"]);

  useEffect (() => {
    if (intersection1?.isIntersecting === true) {
      setisVisible(["show","hide","hide"]);
    } if (intersection2?.isIntersecting === true) {
      setisVisible(["hide","show","hide"]);
    } if (intersection3?.isIntersecting === true) {
      setisVisible(["hide","hide","show"]);
    }
  },[intersection1,intersection2,intersection3]);

  return (
    <div className="App">
      
      <div className ="boxborder"></div>
      
      <Navbar isVisible={isVisible} />
      <Socialbar />

      <div ref={sectionRef1} className={isVisible[0]}> 
        <section id="Home">
            <div className="homecontents">
                <p id="title">Navanith Niranjan</p>
                <Changingtext />
            </div>
        </section>
      </div>

      <div ref={sectionRef2} className={isVisible[1]}>
        <section id="Projects">
            <div className="header">
                <span className="headerleft">projects</span>
                <span className="headerright">navanith niranjan</span>
            </div>
            <ProjectsList />
        </section>
      </div>
 
      <div ref={sectionRef3} className={isVisible[2]}>
        <section id="Contact">
            <div className="header">
                <div className="headerleft">contact</div>
                <div className="headerright">navanith niranjan</div>
            </div>
            <ContactForm />
        </section>
      </div>

    </div>
  );
}

export default App;
