import React from 'react';
import Style from './Header.module.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../context/UserStore';
import UserFetch from '../../hooks/UserFetch';

const Header = () => {
 const { data, userLogout } = React.useContext(UserContext);
 // const { data } = UserFetch();
  


  return (
    <header className={Style.header}>
      <nav className={`${Style.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={Style.logo}>
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={Style.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={Style.login}>
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
export default Header;
