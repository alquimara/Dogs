import React, { useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import Style from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';
const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();
  React.useEffect(() => {
    setTitle(location.pathname);
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);
  return (
    <header className={Style.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
export default UserHeader;
