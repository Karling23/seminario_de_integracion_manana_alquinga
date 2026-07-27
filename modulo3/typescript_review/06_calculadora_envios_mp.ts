type MetodoEntrega = "tienda" | "provincial" | "nacional";

interface EntregaMoto {
  modelo: string;
  pesoKg: number;
  valorMoto: number;
  metodo: MetodoEntrega;
}

const TARIFAS_KILOGRAMO: Record<MetodoEntrega, number> = {
  tienda:        0.00,
  provincial:    0.80,
  nacional:      2.50,
};

const SEGURO_ENVIO_PCT = 0.002;

function cotizarEntrega(entrega: EntregaMoto): string {
  const tarifaBase = TARIFAS_KILOGRAMO[entrega.metodo];
  const costoFlete = tarifaBase * entrega.pesoKg;
  const costoSeguro = entrega.valorMoto * SEGURO_ENVIO_PCT;
  const total = costoFlete + costoSeguro;

  return `
🏍️ Cotización de Entrega de Motocicleta
   Modelo      : ${entrega.modelo}
   Peso        : ${entrega.pesoKg} kg
   Método      : ${entrega.metodo}
   Valor Moto  : $${entrega.valorMoto.toFixed(2)}
   Flete       : $${costoFlete.toFixed(2)}
   Seguro      : $${costoSeguro.toFixed(2)}
   ─────────────────────────────────────
   TOTAL ENVÍO : $${total.toFixed(2)}
  `.trim();
}

const envio1: EntregaMoto = {
  modelo: "Yamaha YZF-R1",
  pesoKg: 201,
  valorMoto: 17500,
  metodo: "nacional",
};

const envio2: EntregaMoto = {
  modelo: "Vespa Primavera 125",
  pesoKg: 115,
  valorMoto: 4500,
  metodo: "provincial",
};

console.log(cotizarEntrega(envio1));
console.log("---");
console.log(cotizarEntrega(envio2));
