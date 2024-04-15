import { useContext } from "react";
import { FotosFavoritas } from "../assets/context/fotosfavoritas";

export default function Favorites(){

  const { data } = useContext(FotosFavoritas);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="favoritas">
          {
            data.length ? (
            data.map((foto, index) => (
            <img key={index} src={foto.src} alt={foto.alt} />)
            )) : (<h2>No tienes fotos en favoritas</h2>)
          }
      </div>
    </div>
  );
};
