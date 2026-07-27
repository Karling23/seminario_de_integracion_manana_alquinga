interface Exportable {
  exportarFicha(): string;
}

interface ValidableVenta {
  esAptaParaVenta(): boolean;
}

class MotoDeportiva implements Exportable, ValidableVenta {
  constructor(
    public matricula: string,
    public modelo: string,
    public anio: number,
    public precio: number
  ) {}

  exportarFicha(): string {
    return JSON.stringify({
      matricula: this.matricula,
      modelo: this.modelo,
      anio: this.anio,
      precio: this.precio
    });
  }

  esAptaParaVenta(): boolean {
    return this.precio > 0 && this.anio >= 2015;
  }
}

const motoVenta = new MotoDeportiva("M-12345", "Yamaha MT-03", 2022, 5200);
console.log(motoVenta.esAptaParaVenta());
console.log(motoVenta.exportarFicha());
