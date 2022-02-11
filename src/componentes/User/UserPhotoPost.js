import React, { useState } from 'react';
import Style from './UserPhotoPost.module.css';
import Input from '../Formulario/Input';
import Button from '../Formulario/Button';
import UserForm from '../../hooks/UseForm';
import UserFetch from '../../hooks/UserFetch';
import { PHOTO_POST } from '../../api/Api';
import { UserContext } from '../../context/UserStore';
import Erro from '../Erro/Erro';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = UserForm();
  const peso = UserForm('number');
  const idade = UserForm('number');
  const [img, setImg] = useState({});
 //const { data, erro, loading, request } = UserFetch();
  const { request, loading, erro, data } = React.useContext(UserContext);
  const navigate = useNavigate();
  

  React.useEffect(() => {
    
  // if (data) navigate('/conta');
  }, []);

  function handleUserPhoto(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${Style.photoPost} animeLeft`}>
      <form onSubmit={handleUserPhoto}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImg}
          className={Style.file}
        />
        {loading ? <Button>Enviando</Button> : <Button>Enviar</Button>}
        <Erro error={erro} />
      </form>
      <div>
        {img.preview && (
          <div
            className={Style.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};
export default UserPhotoPost;
