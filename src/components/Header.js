import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ position: 'relative' }}>
          <img
            src="/images/igsabanner.jpg"
            alt="IGSA Banner"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          <header className="header-navbar">
            <nav className="nav-menu">
              <ul className="nav-links">
                <li><a href="#home" className="orange">HOME</a></li>
                <li><a href="#Card" className="orange">UPCOMING EVENTS</a></li>
                <li><Link to="/UDNews" className="green">UD NEWS</Link></li>
                <li><Link to="/newteam" className="green">ABOUT US</Link></li>
              
              </ul>
            </nav>
          </header>
        </div>
      </React.Fragment>
    );
  }
}
