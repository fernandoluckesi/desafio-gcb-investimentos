import React from 'react';
import { Link } from 'react-router-dom';
import comida1 from '../Layout/images/comida_1.svg';
import comida2 from '../Layout/images/comida_2.svg';
import comida3 from '../Layout/images/comida_3.svg';
import comida4 from '../Layout/images/comida_4.svg';
import '../Layout/css/partTwo.css';


const PartTwo = () => {
  return (
    <div className="container-part-two">
      <h1 className="title-part-two">
        Our Best Recipes
      </h1>
      <p className="text-content-part-two">
        Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="recipes-cards-part-two">
        <div className="card-part-two">
          <img src={comida1} alt="comida 1" />
          <div>
            <p>Broccoll Salad with Bacon</p>
            <Link to="/">See Recipe</Link>
          </div>
        </div>
        <div className="card-part-two">
          <img src={comida2} alt="comida 2" />
          <div>
            <p>Classic Beef Burgers</p>
            <Link to="/">See Recipe</Link>
          </div>
        </div>
        <div className="card-part-two">
          <img src={comida3} alt="comida 3" />
          <div>
            <p>Classic Potato Salad</p>
            <Link to="/">See Recipe</Link>
          </div>
        </div>
        <div className="card-part-two">
          <img src={comida4} alt="comida 4" />
          <div>
            <p>Cherry Cobbler on the Grill</p>
            <Link to="/">See Recipe</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PartTwo;
