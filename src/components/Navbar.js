import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.scss';
import '../styles/Home.scss';
import '../styles/Projects.scss';
import '../styles/Skills.scss';

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [offset, setOffset] = useState(0);

  const handleNavClick = (index, event) => {
    if (selected === index) {
      // If the same item is clicked again, reset the selection
      setSelected(null);
      setOffset(0);
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('left', 'right');
      });
    } else {
      // Set the new selected item
      setSelected(index);
      const navWidth = document.querySelector('.navbar-nav').offsetWidth;
      const linkWidth = event.target.offsetWidth;
      const linkLeft = event.target.offsetLeft;
      setOffset((navWidth / 2) - (linkLeft + linkWidth / 2));

      document.querySelectorAll('.nav-link').forEach((link, i) => {
        if (i < index) {
          link.classList.add('left');
          link.classList.remove('right');
        } else if (i > index) {
          link.classList.add('right');
          link.classList.remove('left');
        } else {
          link.classList.remove('left', 'right');
        }
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent custom-navbar">
      <div className="container">
        <div className="row w-100">
          <div className="col-12 text-center">
            <Link className="navbar-brand mb-0 h1" to="/">Youssef Gad</Link>
          </div>
          <div className="col-12">
            <div className="navbar-nav justify-content-center" style={{ transform: `translateX(${offset}px)` }}>
              {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  className={`nav-link augmented-border ${selected === index ? 'selected' : ''}`}
                  data-augmented-ui="tl-clip br-clip exe"
                  to={`/${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(index, e)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
