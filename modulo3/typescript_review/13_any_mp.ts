let datosImportadosMoto: any = "KTM Duke 200";
datosImportadosMoto = 200;
datosImportadosMoto = { modelo: "Duke", anio: 2024 };

let respuestaApiMoto: unknown = "Honda CBR 600";
respuestaApiMoto = 600;

if (typeof respuestaApiMoto === "string") {
  console.log(respuestaApiMoto.toUpperCase());
}

function errorStockInvalido(mensaje: string): never {
  throw new Error(`Error Crítico de Stock: ${mensaje}`);
}

function comprobarGamaInalcanzable(gama: never): never {
  throw new Error(`Caso de gama de moto no manejado: ${String(gama)}`);
}
