import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './../Formulario/Input';
import Button from './../Formulario/Button';
import UserForm from '../../hooks/UseForm';
import { GET_USER, TOKEN_POST } from '../../api/Api';
import { UserContext } from '../../context/UserStore';
import Erro from '../Erro/Erro';
import Style from './LoginForm.module.css';
import StyleBtn from '../Formulario/Button.module.css';

const LoginForm = () => {
  const username = UserForm();
  const passsword = UserForm();
  const { userLogin, erro, loading } = React.useContext(UserContext);

  async function submit(event) {
    event.preventDefault();
    if (username.validate() && passsword.validate()) {
      userLogin(username.value, passsword.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={Style.form} onSubmit={submit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...passsword} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Erro error={erro} />
      </form>
      <Link className={Style.perdeu} to="/login/perdeu">
        Esqueceu a senha ?
      </Link>
      <div className={Style.cadastro}>
        <h2 className={Style.subtitle}> Cadastre-se</h2>
        <p>Ainda não possue conta? Cadastre-se no site</p>
      </div>
      <Link className={StyleBtn.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
