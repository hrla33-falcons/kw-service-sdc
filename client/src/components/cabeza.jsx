import React from 'react';
import Arriba from './arriba.jsx';
import MainNav from './mainNav.jsx';
import QuickNav from './quickNav.jsx';

const Cabeza = props => (
  <header className='sb-header' role='banner'>
    <div className='messages'></div>
    <Arriba />
    <div className='header__wrapper'>
      <div className='sb-header__container'>
        <div className='header__logo--wrapper'>
          <a href='https://www.ikea.com/us/en/' className='header__logo sb-a'>
            <img
              className='sb-img header__ikea-logo'
              src='https://www.ikea.com/us/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg'
              alt='IKEA'
              title='IKEA'
            ></img>
            <span className='header__sr-only'>IKEA</span>
          </a>
        </div>
        <MainNav />
        <QuickNav />
      </div>
    </div>
  </header>
);

export default Cabeza;
