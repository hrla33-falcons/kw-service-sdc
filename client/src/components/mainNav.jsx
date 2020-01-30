import React from 'react';

const MainNav = props => (
  <nav className='header__main-nav'>
    <div className='header__main-nav--wrapper'>
      <ul className='main-bygga-menu' data-menu-links>
        <li className='main-bygga-menu__item'>
          <a
            href='https://wwww.ikea.com/us/en/ikea-family/'
            className='sb-a main-bygga-menu__link hnf-link--black'
          >
            <span className='main-bygga-menu__title'>Offers</span>
          </a>
        </li>
        <li className='main-bygga-menu__item'>
          <button
            className='main-bygga-menu__button hnf-trailing-icon'
            aria-expanded='false'
          >
            <span className='main-bygga-menu__title'>Products</span>
            <svg
              className='hnf-svg-icon hnf-svg-icon--100 main-bygga-menu__button--svg'
              focusable='false'
              xmlns='https://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z'></path>
            </svg>
          </button>
        </li>
        <li className='main-bygga-menu__item'>
          <button
            className='main-bygga-menu__button hnf-trailing-icon'
            aria-expanded='false'
          >
            <span className='main-bygga-menu__title'>Rooms</span>
            <svg
              className='hnf-svg-icon hnf-svg-icon--100 main-bygga-menu__button--svg'
              focusable='false'
              xmlns='https://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z'></path>
            </svg>
          </button>
        </li>
        <li className='main-bygga-menu__item'>
          <a
            href='https://wwww.ikea.com/us/en/ikea-family/'
            className='sb-a main-bygga-menu__link hnf-link--black'
          >
            <span className='main-bygga-menu__title'>Ideas & Inspiration</span>
          </a>
        </li>
        <li className='main-bygga-menu__item'>
          <a
            href='https://wwww.ikea.com/us/en/ikea-family/'
            className='sb-a main-bygga-menu__link hnf-link--black'
          >
            <span className='main-bygga-menu__title'>New at IKEA</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default MainNav;
