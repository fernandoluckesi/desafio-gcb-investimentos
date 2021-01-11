import React from 'react';
import '../Layout/css/partFour.css';
import blogImage1 from '../Layout/images/blog_image_1.svg';
import blogImage2 from '../Layout/images/blog_image_2.svg';
import blogImage3 from '../Layout/images/blog_image_3.svg';
import blogImage4 from '../Layout/images/blog_image_4.svg';
import perfil from '../Layout/images/perfil.png';

const PartFour = () => {
  return (
    <div className="container-part-four">
      <h1 className="title-part-four">
        Read Our Blog
      </h1>
      <p className="subtitle-part-four">
        Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="blog-cards-part-four">
        <div className="card-part-four">
          <img src={blogImage1} alt="blog imagem 1" className="blog-card-img" />
          <h3>Quick-start guide to nuts and seeds</h3>
          <div className="blog-card-user-info">
            <img src={perfil} alt="imagem de usuario" className="user-img" />
            <p className="user-name">Kevin Ibrahim</p>
          </div>
        </div>
        <div className="card-part-four">
          <img src={blogImage2} alt="blog imagem 2" className="blog-card-img" />
          <h3>Nutrition: Tips for Improving Your Health</h3>
          <div className="blog-card-user-info">
            <img src={perfil} alt="imagem de usuario" className="user-img" />
            <p className="user-name">Mike Jackson</p>
          </div>
        </div>
        <div className="card-part-four">
          <img src={blogImage3} alt="blog imagem 3" className="blog-card-img" />
          <h3>The top 10 benefits of eating healthy</h3>
          <div className="blog-card-user-info">
            <img src={perfil} alt="imagem de usuario" className="user-img" />
            <p className="user-name">Bryan McGregor</p>
          </div>
        </div>
        <div className="card-part-four">
          <img src={blogImage4} alt="blog imagem 4" className="blog-card-img" />
          <h3>What Makes a Healthy Diet?</h3>
          <div className="blog-card-user-info">
            <img src={perfil} alt="imagem de usuario" className="user-img" />
            <p className="user-name">Jashua</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PartFour;
