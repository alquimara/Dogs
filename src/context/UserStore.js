import React, { useState } from 'react';
import {
  GET_USER,
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_POST,
} from '../api/Api';
import { useNavigate } from 'react-router-dom';
import UserFetch from '../hooks/UserFetch';
export const UserContext = React.createContext();


const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

 
  

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setErro(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (erro) {
      json = null;
      setErro(erro.message);
    } finally {
      setLoading(false);
      setData(json);
      navigate('/conta');
      return { response, json };
      
    }
    
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setErro(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token invalido');
          await getUser(token);

          const json = await response.json();
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  async function userLogout() {
    setData(null);
    setErro(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  async function createUser(username, email, password) {
    const { url, options } = USER_POST({ username, email, password });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username, password);
  }

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  async function userLogin(username, password) {
    try {
      setErro(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error(`Error:Usuário invalido.`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setErro(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        userLogout,
        erro,
        loading,
        login,
        createUser,
        request,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserStorage;
