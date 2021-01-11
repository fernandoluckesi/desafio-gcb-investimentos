import React from 'react';
import { getFetchCep } from '../Services/correiosApi';
import '../Layout/css/formRegister.css';

class FormRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      birthDate: '',
      cpf: '',
      cep: '',
      numberAddress: '',
      complement: '',
      street: '',
      district: '',
      city: '',
      state: '',
      inputDisabled: true,
    }
  }

  async getAddress(cep) {
    getFetchCep(cep)
      .then((address) => {
        if (address.length === 0) {
          this.setState({ inputDisabled: false })
        } else {
          this.setState({
            street: address.logradouro,
            district: address.bairro,
            city: address.cidade,
            state: address.uf,
          })
        }
      })
  }

  formValidate() {
    const { name, birthDate, cpf, cep, numberAddress, street, city, state } = this.state;
    const statesArray = [name, birthDate, cpf, cep, numberAddress, street, city, state];

    statesArray.forEach((state) => {
      if (state.trim() === '') alert('Todos os campos devem ser preenchidos');
    });

    const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    const regexNumber = /^[0-9]+$/i;
    if (!regexDate.test(birthDate)) {
      alert('Formato da Data de nascimento está inválido');
    }
    if (!regexNumber.test(cpf) || cpf.length < 11) {
      alert('Campo do CPF está inválido');
    }
    if (!regexNumber.test(cep) || cep.length < 8) {
      alert('Campo do Cep está inválido');
    }
    if (!regexNumber.test(numberAddress)) {
      alert('Campo do Número está inválido');
    }
  }

  setLocalStorage() {
    const { name, birthDate, cpf, cep, numberAddress, complement, street, district, city, state } = this.state;
    const userData = {
      name,
      birthDate,
      cpf,
      cep,
      numberAddress,
      complement,
      street,
      district,
      city,
      state,
    };
    localStorage.setItem('userData', JSON.stringify([userData]));
  }

  submit(event) {
    event.preventDefault();
  }

  render() {
    const { name, birthDate, cpf, cep, numberAddress, complement, street, district, city, state, inputDisabled } = this.state;
    return (
      <div className="container-form-register">
        <form onSubmit={this.submit}>
          <h1>Registre-se</h1>

          <label htmlFor="name">Nome completo</label>
          <input value={name} type="text" id="name" name="name" placeholder="ex: Fernando Nelson Luckesi" onChange={(e) => this.setState({ name: e.target.value })} />

          <label htmlFor="dataNascimento">Data de nascimento</label>
          <input value={birthDate} type="text" id="dataNascimento" name="dataNascimento" placeholder="ex: 25/12/1998" onChange={(e) => this.setState({ birthDate: e.target.value })} />

          <label htmlFor="cpf">CPF (Somente números)</label>
          <input value={cpf} maxLength="11" type="text" id="cpf" name="cpf" placeholder="ex: 12385247587" onChange={(e) => this.setState({ cpf: e.target.value })} />

          <label htmlFor="cep">Cep (Somente números)</label>
          <input value={cep} maxLength="8" type="text" id="cep" name="cep" placeholder="ex: 05144085" onChange={(e) => this.setState({ cep: e.target.value })} onBlur={(e) => this.getAddress(e.target.value)} />

          <label htmlFor="rua">Rua</label>
          <input value={street} type="text" id="rua" name="rua" disabled={inputDisabled} onChange={(e) => this.setState({ street: e.target.value })} />

          <label htmlFor="numero">Número (Somente números)</label>
          <input value={numberAddress} type="text" id="numero" name="numero" onChange={(e) => this.setState({ numberAddress: e.target.value })} />

          <label htmlFor="complement">Complemento (Opcional)</label>
          <input value={complement} type="text" id="complement" name="complement" onChange={(e) => this.setState({ complement: e.target.value })} />

          <label htmlFor="bairro">Bairro</label>
          <input value={district} type="text" id="bairro" name="bairro" disabled={inputDisabled} onChange={(e) => this.setState({ district: e.target.value })} />

          <label htmlFor="cidade">Cidade</label>
          <input value={city} type="text" id="cidade" name="cidade" disabled={inputDisabled} onChange={(e) => this.setState({ city: e.target.value })} />

          <label htmlFor="estado">Estado</label>
          <input value={state} type="text" id="estado" name="estado" disabled={inputDisabled} onChange={(e) => this.setState({ state: e.target.value })} />

          <button type="submit" onClick={() => {
            this.formValidate();
            this.setLocalStorage();
          }}>Registrar</button>
        </form>
      </div>
    )
  }
}


export default FormRegister;
