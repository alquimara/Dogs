import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserStore';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import UserMedia from '../../hooks/UserMedia';
import Style from './UserHeaderNav.module.css';
import { useLocation } from 'react-router-dom';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = UserMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${Style.mobileButton} ${
            mobileMenu && Style.mobileButtonActive
          }`}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? Style.navMobile : Style.nav} ${
          mobileMenu && Style.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={Style.active}>
          <MinhasFotos />
          {mobile && 'minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={Style.active}>
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={Style.active}>
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          {' '}
         <Sair/> 
        {mobile && 'Sair'}
         
        </button>
      </nav>
    </>
  );
};
export default UserHeaderNav;
