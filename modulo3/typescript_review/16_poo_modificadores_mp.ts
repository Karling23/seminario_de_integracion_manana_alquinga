class VentaMoto {
  readonly idFactura: string;
  public cliente: string;
  private totalPagar: number;
  protected divisa: string;

  constructor(idFactura: string, cliente: string, precioBase: number) {
    this.idFactura = idFactura;
    this.cliente = cliente;
    this.totalPagar = precioBase;
    this.divisa = "USD";
  }

  obtenerTotalPagar(): number {
    return this.totalPagar;
  }

  agregarAccesorios(costo: number): void {
    if (costo <= 0) throw new Error("Costo de accesorios debe ser positivo");
    this.totalPagar += costo;
  }
}

const venta = new VentaMoto("FAC-2026-001", "Luis K.", 7500);
console.log(venta.cliente);
console.log(venta.idFactura);
console.log(venta.obtenerTotalPagar());
venta.agregarAccesorios(350);
console.log(venta.obtenerTotalPagar());
