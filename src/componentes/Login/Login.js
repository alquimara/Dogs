import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';
import { UserContext } from '../../context/UserStore';
import Style from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={Style.login}>
      <div className={Style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginLost />} />
          <Route path="resetar" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
};
export default Login;
