import { formatearPrecio, type Producto } from "../services/datos.service";

interface Props {
  producto: Producto;
}

export function TarjetaProducto({ producto }: Props) {
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{formatearPrecio(producto.precio)}</p>
          {producto.destacado && <span className="badge bg-warning text-dark">⭐ Destacado</span>}
        </div>
      </div>
    </div>
  );
}