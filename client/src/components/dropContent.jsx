import React from 'react';
import PrimDropContent from './primDropContent.jsx';

// var lex = ["lex", "lex drawer unit", "rmchair", "lex desk", "rea rug", "lgot"];
// var clum = ["IKEA ART EVENT 2019 Limited Collection", "The art of organizing: toy storage", "How to make a DIY canvas for your artwork"];

const DropContent = ({ searchText, sliced, articlesArr, suggestions }) => {
  if (searchText.length && articlesArr.length) {
    return (
      <div>
        <div className='sb-search-results'>
          <ol className='dd-sb-search-results__list sb-search-results__container'>
            {sliced.map((item, i) => (
              <li
                style={{ paddingBottom: '1rem', fontSize: 'large' }}
                className='dd-sb-search-results-item'
                key={i}
              >
                <a className='dd-sb-cero-search-results-item__link'>
                  {item.name} {item.type}
                  {/* <b>{item.primero}</b> */}
                </a>
              </li>
            ))}
          </ol>
          <ol
            className='dd-sb-search-results__list sb-search-results__container'
            style={{ alignself: 'stretch', borderLeft: 'gainsboro 1px solid' }}
          >
            {articlesArr.map((article, i) => {
              return (
                <li className='dd-sb-search-results-item--planner' key={i}>
                  <a className='dd-sb-pri-search-results-item__link-nd'>
                    {article}
                  </a>
                </li>
              );
            })}
          </ol>
          <ol
            className='dd-sb-search-results__list sb-search-results__container dd-sb-search-results__container--product-suggestions'
            style={{ borderLeft: 'gainsboro 1px solid' }}
          >
            {suggestions.map((item, i) => (
              <li
                className='dd-sb-search-results-item dd-sb-product-suggestions-item'
                key={i}
              >
                <a className='dd-sb-search-results-item__link dd-sb-product-suggestions-item__link'>
                  <img
                    className='dd-sb-product-suggestions-item__image'
                    src={item.img}
                  ></img>
                  <div className='dd-sb-product-suggestions-item__product-info'>
                    <p className='dd-sb-product-suggestions-item__heading'>
                      {item.name}
                    </p>
                    <p className='dd-sb-product-suggestions-item__details'>
                      <span className='dd-sb-product-suggestions-item__type'>
                        {item.type}
                      </span>
                      <span className='dd-sb-product-suggestions-item__measurements'>
                        , {item.dimensions}"
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <PrimDropContent />
      </div>
    );
  }
};

// <div className='sb-search-results'>
//   {searchText.length ? (
//     <div className='sb-search-results'>
//       <ol className='dd-sb-search-results__list sb-search-results__container'>
//         {sliced.map((item, i) => (
//           <li
//             style={{ paddingBottom: '1rem', fontSize: 'large' }}
//             className='dd-sb-search-results-item'
//             key={i}
//           >
//             <a className='dd-sb-cero-search-results-item__link'>
//               {item.name} {item.type}
//               {/* <b>{item.primero}</b> */}
//             </a>
//           </li>
//         ))}
//       </ol>
//       <ol
//         className='dd-sb-search-results__list sb-search-results__container'
//         style={{ alignself: 'stretch', borderLeft: 'gainsboro 1px solid' }}
//       >
//         <li className='dd-sb-search-results-item--planner'>
//           <a className='dd-sb-pri-search-results-item__link-nd'>
//             Hi, I'm suggestions.secondRow
//           </a>
//         </li>
//         <li className='dd-sb-search-results-item--planner'>
//           <a className='dd-sb-sec-search-results-item__link-nd'>
//             {/* <b>{suggestions[1].secondRow}</b> */}
//           </a>
//         </li>
//         <li className='dd-sb-search-results-item--planner'>
//           <a className='dd-sb-sec-search-results-item__link-nd'>
//             {/* <b>{suggestions[2].secondRow}</b> */}
//           </a>
//         </li>
//         {sliced.map((item, i) => (
//           <li style={{ paddingBottom: '.5rem', fontSize: 'large' }} key={i}>
//             <a className='dd-sb-search-results-item__link-nd'>Hi I'm Sliced</a>
//           </li>
//         ))}
//       </ol>
//       <ol
//         className='dd-sb-search-results__list sb-search-results__container dd-sb-search-results__container--product-suggestions'
//         style={{ borderLeft: 'gainsboro 1px solid' }}
//       >
//         {suggestions.map((item, i) => (
//           <li
//             className='dd-sb-search-results-item dd-sb-product-suggestions-item'
//             key={i}
//           >
//             <a className='dd-sb-search-results-item__link dd-sb-product-suggestions-item__link'>
//               <img
//                 className='dd-sb-product-suggestions-item__image'
//                 src={item.img}
//               ></img>
//               <div className='dd-sb-product-suggestions-item__product-info'>
//                 <p className='dd-sb-product-suggestions-item__heading'>
//                   {item.name}
//                 </p>
//                 <p className='dd-sb-product-suggestions-item__details'>
//                   <span className='dd-sb-product-suggestions-item__type'>
//                     {item.type}
//                   </span>
//                   <span className='dd-sb-product-suggestions-item__measurements'>
//                     , {item.dimensions}"
//                   </span>
//                 </p>
//               </div>
//             </a>
//           </li>
//         ))}
//       </ol>
//     </div>
//   ) : (
//     <PrimDropContent />
//   )}
// </div>;

export default DropContent;
