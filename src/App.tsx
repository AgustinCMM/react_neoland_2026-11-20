import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero titulo="El mejor café de la ciudad" subtitulo="Tostado aquí, cada mañana" textoBoton="Ver carta" />
    </>
  );
}

export default App;