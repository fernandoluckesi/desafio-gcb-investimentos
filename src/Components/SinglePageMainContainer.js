import React from 'react';
import {
  PartOne,
  PartTwo,
  PartThree,
  PartFour,
  PartFive,
} from '../Components';
import '../Layout/css/singlePageMainContainer.css';

const SinglePageMainContainer = () => {
  return (
    <div className="single-page-main-container">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartFive />
    </div>
  )
};

export default SinglePageMainContainer;
