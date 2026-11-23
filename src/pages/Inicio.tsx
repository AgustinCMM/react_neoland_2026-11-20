import { Hero } from "../components/Hero";
import { ListaProductos } from "../components/ListaProductos";
import { useOutletContext } from "react-router";

export function Inicio() {
  const { sumarLike } = useOutletContext<{ sumarLike: () => void }>();

  return (
    <>
      <Hero titulo="El mejor café de la ciudad" subtitulo="Tostado aquí, cada mañana" textoBoton="Contactanos" />
      <ListaProductos onLike={sumarLike} />
    </>
  );
}