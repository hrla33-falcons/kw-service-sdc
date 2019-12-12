import React from 'react';
import Arriba from './arriba.jsx';
import MainNav from './mainNav.jsx';
import QuickNav from './quickNav.jsx';

const Cabeza = (props) => (
    <header className="sb-header" role="banner">
    <div className="messages"></div>
    <Arriba />
    <div className="header__wrapper">
      <div className="sb-header__container">
        <div className="header__logo--wrapper">
          <a href="https://www.ikea.com/us/en/" className="header__logo sb-a">
            <img className="sb-img header__ikea-logo" src="https://www.ikea.com/us/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg" alt="IKEA" title="IKEA"></img>
            <span className="header__sr-only">IKEA</span>
          </a>
        </div>
        <MainNav />
        <QuickNav />
      </div>
    </div>
  </header>
)

export default Cabeza;

/*
<button id="SBmobMenuOpen" className="hnf-btn hnf-btn--icon" title="Menu" aria-expanded="true" aria-label="Menu">
            <span className="hnf-btn__icon-bg"></span>
            <span className="hnf-btn__copy">
              <svg className="hnf-svg-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,6V8H5V6ZM5,18H19V16H5Zm0-5H19V11H5Z"> </path>
              </svg>
              <span className="hnf-btn__label">Menu</span>
            </span>
          </button>
*/