# abstraccion_mp.py
from abc import ABC, abstractmethod

# ABC (Abstract Base Class) — clase abstracta que no puede instanciarse
class VehiculoDosRuedas(ABC):
    def __init__(self, color="negro"):
        self.color = color

    # Método abstracto — CADA subclase DEBE implementarlo
    @abstractmethod
    def precio_venta(self) -> float:
        pass

    @abstractmethod
    def impuesto(self) -> float:
        pass

    # Método concreto — compartido por todas las formas
    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.color}: "
                f"precio=${self.precio_venta():.2f}, impuesto=${self.impuesto():.2f}")

# VehiculoDosRuedas()  # TypeError — no puede instanciarse

class Scooter(VehiculoDosRuedas):
    def __init__(self, costo_base, color="blanco"):
        super().__init__(color)
        self.costo_base = costo_base

    def precio_venta(self):
        return self.costo_base * 1.20 # 20% ganancia

    def impuesto(self):
        return self.precio_venta() * 0.10 # 10% impuesto

class Deportiva(VehiculoDosRuedas):
    def __init__(self, costo_base, accesorios, color="rojo"):
        super().__init__(color)
        self.costo_base = costo_base
        self.accesorios = accesorios

    def precio_venta(self):
        return (self.costo_base + self.accesorios) * 1.30 # 30% ganancia

    def impuesto(self):
        return self.precio_venta() * 0.15 # 15% impuesto

class Chopper(VehiculoDosRuedas):
    def __init__(self, costo_base, modificacion_custom, color="negro mate"):
        super().__init__(color)
        self.costo_base = costo_base
        self.modificacion_custom = modificacion_custom

    def precio_venta(self):
        return self.costo_base + self.modificacion_custom + 1000 # ganancia fija

    def impuesto(self):
        return self.precio_venta() * 0.12 # 12% impuesto

# Polimorfismo — mismo código para cualquier VehiculoDosRuedas
motos_inventario = [Scooter(1500, "blanco"), Deportiva(8000, 500, "rojo"), Chopper(5000, 2000, "negro mate")]

for moto in motos_inventario:
    print(moto.describir())

valor_total = sum(m.precio_venta() for m in motos_inventario)
print(f"Valor total del inventario: ${valor_total:.2f}")
