import React from 'react';
import {
  Header,
  SinglePageMainContainer,
  Footer,
} from '../Components';
import '../Layout/css/homePage.css';

const HomePage = () => {
  return (
    <div className="container-home-page">
      <Header />
      <SinglePageMainContainer />
      <Footer />
    </div>
  )
};

export default HomePage;
