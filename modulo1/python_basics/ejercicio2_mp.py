#Un concesionario tiene una lista de ventas diarias
#ventas =[1200, 800, 2000, 500, 3000]
#reglas:
# - Solo cuentan las ventas mayores a $1000 (motos gama media/alta)
# - Por cada venta valida:
#     - Si es mayor a 2500 -> bono de $300 para el vendedor
#     - Si no -> bono de $100
# - Al final mostrar:
#     - Total de ventas validas
#     - Total de bono acumulado

ventas = [1200, 800, 2000, 500, 3000]
ventas_validas = 0
bono_acumulado = 0

for venta in ventas:
    if (venta > 1000):
        ventas_validas += 1
        if (venta > 2500):
            bono = 300
        else:
            bono = 100
        print(f"Venta de moto: ${venta}, Bono comisión: ${bono}")
