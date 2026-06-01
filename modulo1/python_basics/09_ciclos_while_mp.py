print("Ciclo while")

motos_vendidas = 1
while motos_vendidas <= 5:
    print(f"Motos vendidas hoy: {motos_vendidas}")
    motos_vendidas += 1

print("continue")
i = 1
while (i <= 5):
    i += 1
    if i == 3:
        continue
    print(f"Cliente atendido número: {i}")
print("break")
i = 1
while (i <= 5):
    i += 1
    if i == 3:
        break
    print(f"Cliente atendido número: {i}")

precio_oferta = int(input("Ingresa un precio de oferta o 0 para salir: "))
while precio_oferta != 0:
    print("Registrando oferta de:", precio_oferta)
    precio_oferta = int(input("Ingresa un precio de oferta o 0 para salir: "))
    
inventario = 1
while(inventario <= 5):
    print(f"Verificando inventario moto {inventario}")
    inventario += 1
else:
    print("Revisión de inventario finalizada")
    
ventas = 1

while True:
    print(f"Venta registrada {ventas}")
    ventas += 1
    if ventas > 5:
        break
