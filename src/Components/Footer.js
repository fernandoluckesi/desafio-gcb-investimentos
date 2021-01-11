import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout/css/footer.css';

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        ©️ Copyrights 2019 Stack. All Rights Reserved.
      </p>
      <ul className="nav-footer">
        <li><Link to="/">Privacy Policy</Link></li>
        <li><Link to="/">Terms and Conditions</Link></li>
      </ul>
    </footer>
  )
};

export default Footer;
