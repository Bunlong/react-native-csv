import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="grid-container">
        <div className="grid-40 mobile-grid-50">
          <div className="links">
            <a href="/">
              <i className="fa fa-home fa-lg" /> Home
            </a>
            <a href="/demo">
              <i className="fa fa-magic fa-lg" /> Demo
            </a>
            <a href="/docs">
              <i className="fa fa-book fa-lg" /> Docs
            </a>
          </div>
        </div>
        <div className="grid-20 hide-on-mobile text-center">
          <a href="/" className="text-logo">
            react-native-csv 3
          </a>
        </div>
        <div className="grid-40 mobile-grid-50 text-right">
          <div className="links">
            <a href="https://github.com/Bunlong/react-native-csv">
              <i className="fa fa-github fa-lg" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
