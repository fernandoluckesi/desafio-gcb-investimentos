import React from 'react';
import '../Layout/css/partFive.css';

const PartFive = () => {
  return (
    <div className="container-part-five">
      <div className="join-container-part-five">
        <h1>
          Join our membership to get special offer
        </h1>
        <div className="container-join-input-button">
          <input type="text" placeholder="Enter your email address"/>
          <button>Join</button>
        </div>
      </div>
    </div>
  )
};

export default PartFive;
