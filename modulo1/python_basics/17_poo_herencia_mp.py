# herencia_mp.py

class VehiculoMotorizado:
    def __init__(self, marca, modelo, año):
        self.marca  = marca
        self.modelo = modelo
        self.año    = año
        self._kilometraje = 0    # _ → convención "protegido"

    def realizar_viaje(self, kilometros):
        self._kilometraje += kilometros
        return self

    def resetear_trip(self):
        print("Trip reseteado")
        return self

    def __str__(self):
        return f"{self.marca} {self.modelo} ({self.año}) — {self._kilometraje} km recorridos"

class MotoCombustion(VehiculoMotorizado):
    def __init__(self, marca, modelo, año, capacidad_tanque=15):
        super().__init__(marca, modelo, año)   # llama al constructor del padre
        self.capacidad_tanque = capacidad_tanque

    def encender_motor(self):
        return f"{self.marca} {self.modelo}: ¡Brum brum!"

    def __str__(self):
        return f"{super().__str__()} ({self.capacidad_tanque}L de tanque)"

class Cuatrimoto(VehiculoMotorizado):
    def __init__(self, marca, modelo, año, traccion):
        super().__init__(marca, modelo, año)
        self.traccion = traccion

    def activar_4x4(self):
        return f"🚜 {self.marca} activa modo 4x4!"

    def __str__(self):
        return f"{super().__str__()} (Tracción {self.traccion})"

class MotoElectrica(MotoCombustion):
    def __init__(self, marca, modelo, año, autonomia):
        # Para MotoElectrica omitimos tanque y usamos autonomia
        super().__init__(marca, modelo, año, capacidad_tanque=0)
        self.__autonomia = autonomia
        self.__bateria   = 100

    def cargar(self, porcentaje=100):
        self.__bateria = min(100, self.__bateria + porcentaje)
        return self

    @property
    def autonomia_restante(self):
        return self.__autonomia * self.__bateria / 100

    def __str__(self):
        return (f"{self.marca} {self.modelo} ({self.año}) — {self._kilometraje} km | "
                f"Batería: {self.__bateria}% | "
                f"Autonomía: {self.autonomia_restante:.0f}km")

# Herencia — cada objeto es también de todos sus tipos padre
zero_sr = MotoElectrica("Zero", "SR/F", 2024, 250)
zero_sr.realizar_viaje(50)
print(zero_sr)

print(isinstance(zero_sr, MotoElectrica))  # True
print(isinstance(zero_sr, MotoCombustion)) # True — herencia
print(isinstance(zero_sr, VehiculoMotorizado)) # True — herencia transitiva
print(isinstance(zero_sr, Cuatrimoto))     # False

# MRO — Method Resolution Order
print(MotoElectrica.__mro__)
