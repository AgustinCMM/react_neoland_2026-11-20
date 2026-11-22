import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ListaProductos } from "./components/ListaProductos";

function App() {
  return (
    <>
      <Navbar />
      <Hero titulo="El mejor café de la ciudad" subtitulo="Tostado aquí, cada mañana" textoBoton="Ver carta" />
      <ListaProductos />
    </>
  );
}

export default App;