interface HeroProps {
  titulo: string;
  subtitulo: string;
  textoBoton?: string;   // opcional
}

export function Hero({ titulo, subtitulo, textoBoton = "Saber más" }: HeroProps) {
  return (
    <section className="container text-center py-5">
      <h1 className="display-4">{titulo}</h1>
      <p className="lead">{subtitulo}</p>
      <button className="btn btn-primary">{textoBoton}</button>
    </section>
  );
}