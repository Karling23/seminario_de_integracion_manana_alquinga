// Concepto puro — forma larga (sin atajo)
class PuntoLargo {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// Forma corta con parameter properties (equivalente exacto)
class Punto {
  constructor(
    public x: number,
    public y: number
  ) {}

  distanciaAlOrigen(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const p = new Punto(3, 4);
console.log(p.x);                    // 3
console.log(p.distanciaAlOrigen());  // 5