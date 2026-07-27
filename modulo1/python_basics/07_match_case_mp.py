print("Match - Case")
estado_venta = input("Estado de la venta en_proceso/vendida/cancelada: ")

match estado_venta:
    case "en_proceso":
        print("Venta en proceso de facturación")
    case "vendida":
        print("Moto entregada al cliente")
    case "cancelada":
        print("Venta cancelada")
    case _:
        print(f"Estado '{estado_venta}' no reconocido")


print("Match condicionales")

stock = 7
match stock:
    case n if n < 0:
        print(f"Error de inventario: {n} negativo")
    case 0:
        print("Moto agotada")
    case n if n % 2 == 0:
        print(f"Tenemos {n} motos, cantidad par")
    case n: 
        print(f"Tenemos {n} motos, cantidad impar")
