import { useState } from "react";
import { obtenerProductos } from "../services/datos.service";
import { TarjetaProducto } from "./TarjetaProducto";

export function ListaProductos() {
  const [soloDestacados, setSoloDestacados] = useState(false);
  const productos = obtenerProductos();

  const visibles = soloDestacados
    ? productos.filter((p) => p.destacado)
    : productos;

  return (
    <section className="container py-4">
      <h2 className="mb-3">Nuestra carta</h2>

      <button
        className="btn btn-outline-dark mb-3"
        onClick={() => setSoloDestacados((estado) => !estado)}
      >
        {soloDestacados ? "Ver todos" : "Ver solo destacados"}
      </button>

      <div className="row g-3">
        {visibles.map((p) => (
          <TarjetaProducto key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}