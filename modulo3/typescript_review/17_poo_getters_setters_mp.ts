class MotorMoto {
  private _cilindrada: number;

  constructor(cilindrada: number) {
    this._cilindrada = cilindrada;
  }

  get cilindrada(): number {
    return this._cilindrada;
  }

  set cilindrada(valor: number) {
    if (valor < 50 || valor > 1500) {
      throw new Error("La cilindrada debe estar entre 50 cc y 1500 cc");
    }
    this._cilindrada = valor;
  }

  get impuestoAmbiental(): number {
    return this._cilindrada * 0.15;
  }
}

const motor = new MotorMoto(250);
console.log(motor.cilindrada);
console.log(motor.impuestoAmbiental.toFixed(2));

motor.cilindrada = 600;
console.log(motor.impuestoAmbiental.toFixed(2));
