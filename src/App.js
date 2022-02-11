import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import UserStorage from './context/UserStore';
import User from './componentes/User/User';
import RouteProtectLogin from './componentes/Login/ProtectLoginRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <RouteProtectLogin path="/conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
