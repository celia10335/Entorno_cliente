
const cuentaSegundos = setInterval(relojDigital,1000);

function relojDigital(){
    var fecha = new Date();
    document.getElementById("reloj").innerHTML = "Son las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
}

function parar(){
    clearInterval(cuentaSegundos);
}

function reiniciar(){
    setInterval(cuentaSegundos);
}

var fecha = new Date();

function muestraHora(){
    document.getElementById("fecha").innerHTML += "&nbspHora: "+ fecha.getHours() + ":" + fecha.getMinutes();
}

function muestraDiaSemana(){
    let diaNumero = fecha.getDay();
    let diaSemana;

    switch (diaNumero){
        case 1:
            diaSemana = "Lunes";
            break;

        case 2:
            diaSemana = "Martes";
            break;
            
        case 3:
            diaSemana = "Miércoles";
            break;
            
        case 4:
            diaSemana = "Jueves";
            break;
        
        case 5:
            diaSemana = "Viernes";
            break;

        case 6:
                diaSemana = "Sábado";
                break;

        case 0:
            diaSemana = "Domingo";
            break;
    }

    
    document.getElementById("fecha").innerHTML += "&nbsp Día de la semana: "+ diaSemana;
}


function muestraDia(){
    document.getElementById("fecha").innerHTML += "&nbsp Día: "+fecha.getDate();
}

function muestraMes(){
    document.getElementById("fecha").innerHTML += "&nbsp Mes:"+ Number(fecha.getMonth()+1);
}

function muestraAnho(){
    document.getElementById("fecha").innerHTML += "&nbsp Año:"+ fecha.getFullYear();
}

function muestraFechaLocal(){
    document.getElementById("fecha").innerHTML += "&nbsp Fecha local:"+ fecha.toLocaleDateString();
}