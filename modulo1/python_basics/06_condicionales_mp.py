print("Condicionales simples")
cilindraje = input("Incluye cilindraje de la moto: ")
if (int(cilindraje) >= 600):
    print("Es una moto de alto cilindraje")

print("Condicionales dos caminos")
precio = input("Incluye precio de la moto: ")
if (int(precio) >= 10000):
    print("Es una moto de lujo")
else:
    print("Es una moto accesible")


print("Condicionales múltiples")
descuento = input("Incluye tu porcentaje de descuento: ")
if (int(descuento) >= 20):
    print("Excelente oferta")
elif (int(descuento) >= 10):
    print("Buena oferta")
elif (int(descuento) >= 5):
    print("Descuento regular")
else:
    print("Sin descuento significativo")


print("Condicionales if anidados")
hay_stock = True
presupuesto = 8000
marca_buscada = "Yamaha"
if (hay_stock):
    if (presupuesto >= 7000):
        if (marca_buscada == "Yamaha"):
            print("Puedes comprar la Yamaha")
        else:
            print("No hay modelos de esa marca disponibles")
    else:
        print("No tienes suficiente presupuesto")
else:
    print("No hay stock en la tienda")
