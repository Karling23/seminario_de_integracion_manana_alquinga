class VelocidadMoto {
  valorKmh: number = 0;
  valorMph: number = 0;

  constructor(kmh: number = 0, mph: number = 0) {
    this.valorKmh = kmh;
    this.valorMph = mph;
  }

  aMph(): number {
    return this.valorKmh * 0.621371;
  }

  aMps(): number {
    return this.valorKmh / 3.6;
  }

  aKmh(): number {
    this.valorKmh = this.valorMph / 0.621371;
    return this.valorKmh;
  }

  describir(): string {
    return (
      `${this.valorKmh.toFixed(1)} km/h = ` +
      `${this.aMph().toFixed(1)} mph = ` +
      `${this.aMps().toFixed(1)} m/s`
    );
  }
}

const velocidadAutopista = new VelocidadMoto(120);
const velocidadCiudad = new VelocidadMoto(50);
const convertirAKmh = new VelocidadMoto(0, 60);

console.log(velocidadAutopista.describir());
console.log(velocidadCiudad.describir());

console.log(`60 mph en km/h: ${convertirAKmh.aKmh().toFixed(2)}`);
