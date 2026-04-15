#Una empresa tiene una lista de ventas diarias de un vendedor
#ventas =[120, 80, 200, 50, 300]
#reglas:
# - Solo cuentan las vetnas mayores a $100
# - Por cada venta valida:
#     - Si es mayor a 250 -> bono de $30
#     - Si no -> bono de $10
# - Al final mostrar:
#     - Total de ventas validas
#     - Total de bono acumulado

ventas = [120, 80, 200, 50, 300]
ventas_validas = 0
bono_acumulado = 0

for venta in ventas:
    if (venta > 100):
        ventas_validas += 1
        if (venta > 250):
            bono = 30
        else:
            bono = 10
        print(f"Venta: {venta}, Bono: {bono}")