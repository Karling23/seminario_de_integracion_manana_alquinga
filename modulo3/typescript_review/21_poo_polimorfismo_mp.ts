class MotoServicio {
  nombreServicio(): string { return "Servicio general"; }
  calcularCosto(costoBase: number): number { return costoBase; }
}

class MantenimientoFrenos extends MotoServicio {
  override nombreServicio(): string { return "Mantenimiento de Frenos"; }
  override calcularCosto(costoBase: number): number {
    return costoBase + 45;
  }
}

class CambioAceite extends MotoServicio {
  constructor(private tipoAceiteSintetico: boolean) { super(); }
  override nombreServicio(): string { return "Cambio de Aceite"; }
  override calcularCosto(costoBase: number): number {
    const extraSintetico = this.tipoAceiteSintetico ? 25 : 10;
    return costoBase + extraSintetico;
  }
}

class LavadoDetallado extends MotoServicio {
  override nombreServicio(): string { return "Lavado Detallado y Pulido"; }
  override calcularCosto(costoBase: number): number {
    return costoBase * 1.20;
  }
}

const serviciosTaller: MotoServicio[] = [
  new MantenimientoFrenos(),
  new CambioAceite(true),
  new LavadoDetallado(),
];

const costoBaseServicio = 30;

for (const s of serviciosTaller) {
  console.log(`${s.nombreServicio()}: Costo Total = $${s.calcularCosto(costoBaseServicio).toFixed(2)}`);
}
