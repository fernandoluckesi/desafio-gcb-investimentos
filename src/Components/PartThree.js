import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout/css/partThree.css';

const PartThree = () => {
  return (
    <div className="container-part-three">
      <div className="container-text-content-part-three">
        <h1>
          The best services ready
          To serve you
        </h1>
        <p>
          <span>
            Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
          </span>
          <span>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </span>
          <span>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </span>
        </p>
        <Link to="/">Know More</Link>
      </div>
    </div>
  )
};

export default PartThree;
