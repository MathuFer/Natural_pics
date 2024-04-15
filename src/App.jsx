import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { FotosFavoritas } from "./assets/context/fotosfavoritas";
import { useState } from "react";

function App() {

  const [data, setData] = useState([])
  const sharedState = {data, setData}

  return (
    <FotosFavoritas.Provider value ={ sharedState }>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </div>
    </FotosFavoritas.Provider>
  );
};
export default App;
