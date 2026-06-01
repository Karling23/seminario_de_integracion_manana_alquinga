#Una tienda evalua las motos con estas reglas para un descuento:
#1. La moto debe tener mas de 1 año en inventario (antiguedad)
#2. Si cumple eso, se revisa su estado general:
#   - Si es mayor o igual a 8/10, se puede optar a descuento
#   - Si es menor, no recibe descuento
#3. Si puede optar al descuento:
#  - Si su precio es menor a $5000 -> descuento de $500
#  - Si su precio es mayor o igual a $5000 -> descuento de $1000

tiempo_inventario = 2
estado = 9
precio = 4500

if (tiempo_inventario > 1):
    if (estado >= 8):
        if (precio < 5000):
            print("Puedes aplicar un descuento de $500")
        else:
            print("Puedes aplicar un descuento de $1000")
    else:
        print("No recibe descuento por estado")
