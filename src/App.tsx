import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ListaProductos } from "./components/ListaProductos";

function App() {
  const [totalLikes, setTotalLikes] = useState(0);

  function sumarLike() {
    setTotalLikes((total) => total + 1);
  }

  return (
    <>
      <Navbar totalLikes={totalLikes} />
      <Hero titulo="El mejor café de la ciudad" subtitulo="Tostado aquí, cada mañana" textoBoton="Ver carta" />
      <ListaProductos onLike={sumarLike} />
    </>
  );
}

export default App;