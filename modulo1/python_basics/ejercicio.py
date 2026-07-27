#Una empresa evalua a sus empleados con estas reglas:
#1. El elmpleado debe tener mas de un año de antiguedad
#2. Si cumple eso, se revisa su calificacion de empeño:
#   - Si es mayor o igual a 8, se puede opatar a bono
#   - Si es menor, no recibe bono
#3. Si puede optar al bono:
#  - Si su salario es menor a $1000 -> bono de $200
#  - Si su salario es mayor o igual a $1000 -> bono de $100

antiguedad = 2
calificacion = 9
salario = 900

if (antiguedad > 1):
    if (calificacion >= 8):
        if (salario < 1000):
            print("Puedes optar a un bono de $200")
        else:
            print("Puedes optar a un bono de $100")
    else:
        print("No recibes bono")
