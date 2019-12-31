import React from 'react';
import SearchDrop from './searchDrop.jsx';
import DropContent from './dropContent.jsx';

const SearchBar = props => (
  <div data-version='v1.130.0'>
    <form
      role='search'
      action='https://www.ikea.com/us/en/search/'
      className='search-box'
    >
      <div
        style={{
          padding: '0 8px 0 0',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className='search-field'>
          <span className='hnf-btn__icon-bg'></span>
          <input
            type='search'
            value={props.searchText}
            onClick={props.onClose}
            onChange={props.searchType}
            name='q'
            className='search-field__input'
            spellCheck='false'
            aria-label='Search by product'
            aria-placeholder='Search by product'
            autoCapitalize='off'
            autoComplete='off'
            autoCorrect='off'
          ></input>
          <span className='search-suggestions'>
            <span className='hnf-btn__copy searchbar-padder'>
              <svg
                className='hnf-svg-icon'
                focusable='false'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
              </svg>
            </span>
            {props.searchText.length ? (
              <span></span>
            ) : (
              <span>
                <span className='hnf-btn__label'>Search</span>
                Search for
                <ul className='search-suggestions__list searchbar-padder'>
                  <li aria-hidden='false'>{props.flasher}</li>
                </ul>
              </span>
            )}
          </span>
        </div>
      </div>
      <div
        style={{
          padding: '0 8px 0px 8px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <SearchDrop show={props.show} onClose={props.onClose}>
          <DropContent
            searchText={props.searchText}
            sliced={props.sliced}
            suggestions={props.suggestions}
            articlesArr={props.articles}
          />
        </SearchDrop>
      </div>
    </form>
  </div>
);

export default SearchBar;

/*
<span>
            <span className="hnf-btn__label">Search</span>
            Search for
            <ul className="search-suggestions__list searchbar-padder">
              <li aria-hidden="false">{flasher}</li>
            </ul>
          </span>

className="searchbar-div"

className="search-suggestions__item"

<li aria-hidden="true">content</li>
            <li aria-hidden="true">products</li>

            <span className="hnf-btn__copy">
            <svg className="hnf-svg-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <span className="hnf-btn__label">Search</span>
          </span>
*/
