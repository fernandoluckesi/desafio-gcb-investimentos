import React from 'react';
import {
  Header,
  FormRegister,
  Footer,
} from '../Components';
import '../Layout/css/registerPage.css';

const RegisterPage = () => {
  return (
    <div className="container-register-page">
      <Header />
      <FormRegister />
      <Footer />
    </div>
  )
}

export default RegisterPage;
