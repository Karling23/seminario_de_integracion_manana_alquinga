enum CategoriaMoto {
  Scooter,
  Deportiva,
  Enduro,
  Cruiser,
}

const categoriaSeleccionada: CategoriaMoto = CategoriaMoto.Deportiva;
console.log(categoriaSeleccionada);
console.log(CategoriaMoto[1]);

enum CodigoDiagnostico {
  OK = 100,
  FallaElectrica = 501,
  FallaTransmision = 502,
  FallaMotor = 505,
}

enum EstadoVenta {
  Disponible  = "DISPONIBLE",
  Reservada   = "RESERVADA",
  Entregada   = "ENTREGADA",
}

const estadoActualMoto: EstadoVenta = EstadoVenta.Reservada;
console.log(estadoActualMoto);
