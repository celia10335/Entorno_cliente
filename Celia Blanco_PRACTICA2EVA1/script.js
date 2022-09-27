// Utilizo como variales "var" el número de columnas y de filas, las cuales recojo del usuario mediante un "prompt". En vez de "var", podría haber utilizado "let", pero al ser un código sencillo y que no está encapsulado en bloque de código, me daba igual uno que otro
var columnas = prompt("Introduzca número de columnas");

// Mediante un while, compruebo que lo que se ha introducido es un valor numérico. Después solicito el número de filas y hago la misma comprobación.
while (isNaN(columnas)){
    alert("El valor introducido no es numérico, pruebe de nuevo");
    columnas = prompt("Introduzca número de columnas");
}

var filas = prompt("Introduzca número de filas");

while (isNaN(filas)){
    alert("El valor introducido no es numérico, pruebe de nuevo");
    filas = prompt("Introduzca número de filas");
}

// Lo más sencillo es usar document.write, porque se parte de una página en blanco
document.write("<table>");

// Decido utilizar un for porque la condición a cumplir es meramente acumulativa ("desde cero hasta..."). Primero dibujo una fila y luego con otro for, las diferentes celdas, una por cada columna. Seguidamente, va la siguiente fila y así hasta completar la tabla.
for (i=0; i<filas; i++){
    document.write("<tr>");

    for (j=0; j<columnas; j++){
        document.write("<td>fila " + (i+1) + ", columna " + (j+1) + " </td>");
    }

    document.write("</tr>");
}


document.write("</table>");