print("Condicionales simples")
edad = input("Incluye edad: ")
if (int(edad) >= 18):
    print("Eres mayor de edad")


print("Condicionales dos caminos")
temperatura = input("Incluye temperatura: ")
if (int(temperatura) >= 30):
    print("Hace calor")
else:
    print("No hace tanto calor")


print("Condicionales múltiples")
nota = input("Incluye tu nota: ")
if (int(nota) >= 90):
    print("Aprobado")
elif (int(nota) >= 80):
    print("Bueno")
elif (int(nota) >= 70):
    print("Aprobado")
else:
    print("Reprobado")


print("Condicionales if anidados")
tiene_reserva = True
dinero = 25
plato = "Pizza"
if (tiene_reserva):
    if (dinero >= 20):
        if (plato == "Pizza"):
            print("Puedes comer pizza")
        else:
            print("No hay pizza disponible")
    else:
        print("No tienes suficiente dinero")
else:
    print("No tienes reserva")