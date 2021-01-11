import React from 'react';
import '../Layout/css/partOne.css';
import searchIcon from '../Layout/images/search-icon.png';

const PartOne = () => {
  return (
    <div className="container-part-one">
      <div className="container-search">
        <p>
          Ready for Trying a new recipe?
        </p>
        <div className="container-search-input-button">
          <input type="text" placeholder="Search healthy recipes"/>
          <button><img src={searchIcon} alt="pesquisar" /> </button>
        </div>
      </div>
    </div>
  )
};

export default PartOne;
