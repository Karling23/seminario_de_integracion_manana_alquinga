const cilindrada: number = 250;
const marca: string = "Honda";
const disponible: boolean = true;

const cilindrada2 = 250;
const marca2 = "Honda";
const disponible2 = true;

let precioMoto: number;
precioMoto = 3500;

let identificadorMoto: number | string = 101;
identificadorMoto = "MOTO-HONDA-250";

function obtenerFichaTecnica(marca: string, anio: number): string {
  return `Ficha técnica: Moto ${marca} — Año ${anio}`;
}
