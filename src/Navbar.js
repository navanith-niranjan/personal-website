import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState([]);
  const navItemsRefs = useRef([]);

  const navigationItems = [
    { label: 'home', target: 'Home' },
    { label: 'projects', target: 'Projects' },
    { label: 'contact', target: 'Contact' },
  ];

  const handleNavClick = (item) => {
    const targetElement = document.getElementById(item.target);
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.35,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetId = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          setActiveNav(targetId);
          document.getElementById(targetId).style.opacity = 1; 
        } 
        else {
          document.getElementById(targetId).style.opacity = 0; 
        }
      });
    }, options);

    navigationItems.forEach((item) => {
      const targetElement = document.getElementById(item.target);
      if (targetElement) {
        navItemsRefs.current.push(targetElement);
        observer.observe(targetElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="navigation">
      <nav className="navbar">
        <ul className="navbar-nav">
          {navigationItems.map((item, index) => (
            <li className='nav-item' key={index}>
              <a className={item.target === activeNav ? 'active' : ''} href={`#${item.target}`} onClick={() => handleNavClick(index)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
