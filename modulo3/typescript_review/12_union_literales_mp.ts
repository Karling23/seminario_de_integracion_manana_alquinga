type EstadoVentaMoto = "cotizacion" | "reserva" | "entregado" | "cancelado";
type TipoFinanciamiento = "contado" | "credito_corto" | "credito_largo" | "leasing";

function actualizarEstadoVenta(idFactura: number, estado: EstadoVentaMoto): void {
  console.log(`Factura Moto #${idFactura}: Estado actualizado a ${estado}`);
}

actualizarEstadoVenta(101, "reserva");

type GamaMotocicleta = "baja" | "media" | "alta" | "exotica";

interface CotizacionMoto {
  id: number;
  modelo: string;
  gama: GamaMotocicleta;
  aprobada: boolean;
}

function formatearCotizacion(c: CotizacionMoto): string {
  const iconosGama: Record<GamaMotocicleta, string> = {
    baja:     "🚲",
    media:    "🛵",
    alta:     "🏍️",
    exotica:  "🔥",
  };
  const estadoAprobacion = c.aprobada ? "✅ Aprobado" : "⏳ Pendiente";
  return `${estadoAprobacion} ${iconosGama[c.gama]} [Cotización #${c.id}] - ${c.modelo}`;
}

const listaCotizaciones: CotizacionMoto[] = [
  { id: 1001, modelo: "Honda Wave 110",      gama: "baja",    aprobada: true  },
  { id: 1002, modelo: "Ducati Streetfighter", gama: "exotica", aprobada: false },
  { id: 1003, modelo: "Kawasaki Versys 650",  gama: "alta",    aprobada: false },
];

for (const cot of listaCotizaciones) {
  console.log(formatearCotizacion(cot));
}
