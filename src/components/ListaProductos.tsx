import { obtenerProductos } from "../services/datos.service";
import { TarjetaProducto } from "./TarjetaProducto";

export function ListaProductos() {
  const productos = obtenerProductos();

  return (
    <section className="container py-4">
      <h2 className="mb-3">Nuestra carta</h2>
      <div className="row g-3">
        {productos.map((p) => (
          <TarjetaProducto key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}