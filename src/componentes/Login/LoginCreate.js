import React from 'react';
import Input from '../Formulario/Input';
import Button from '../Formulario/Button';
import UserForm from '../../hooks/UseForm';
import { USER_POST } from '../../api/Api';
import { UserContext } from '../../context/UserStore';
import UserFetch from '../../hooks/UserFetch';
import Erro from '../Erro/Erro';

const LoginCreate = () => {
  const username = UserForm();
  const email = UserForm('email');
  const password = UserForm('password');
  const { createUser } = React.useContext(UserContext);
  const { erro, loading } = React.useContext(UserContext);
  async function handleSubmit(event) {
    event.preventDefault();
    createUser(username.value, email.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="usename" type="text" {...username} />
        <Input label="Email" name="email" type="email" {...email} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Erro error={erro} />
      </form>
    </section>
  );
};

export default LoginCreate;
