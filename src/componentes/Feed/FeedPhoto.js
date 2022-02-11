import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import { UserContext } from '../../context/UserStore';
import { PHOTOS_GET } from '../../api/Api';
import Erro from '../Erro/Erro'
import { Loanding } from './Loanding';

const FeedPhoto = () => {
  const { data, loading, erro, request } = React.useContext(UserContext);
  React.useEffect(() => {
    async function fetchPhoto() {
    const {url, options} = PHOTOS_GET({page: 1, total: 4, user: 0})
    const {response, json} = await request(url, options)
    console.log(json)
    
    
    }
    fetchPhoto();
  },[request]);


  if(erro) return <Erro error = {erro}/>
  if(loading) return <Loanding/>
  if(data)
 
  return (

   <div> <FeedPhotoItem/></div>
    
   
   /* <ul>
      {data.map((photo) =>(
      
      <FeedPhotoItem key={photo.id} photo={photo}/>
      
      ))}
      
    </ul>
    */
    
     
  );
  else return null;

};
export default FeedPhoto;
