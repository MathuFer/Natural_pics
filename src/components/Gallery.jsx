import { createClient } from 'pexels';
import { useEffect, useState } from "react";
import Foto from './Foto';

const Gallery = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    const client = createClient('X2oas6ITb3Knp8YGZuwjH3toTvfwldAn4u08wL6kfXdJPZdWeRYYgBNX');
    const query = 'Nature';
    client.photos.search({ query }).then(photos => setFotos(photos.photos));
  }, [])
  
  return (
    <main className='gallery'>
      {
      fotos.length ?
        fotos.map(foto => <Foto  key={foto.id} {...foto} />)
        :
        <h2>No hay fotos</h2>
      }
    </main>
  );
};

export default Gallery;
