console.log("Presupuestos");

let arrayIngresos = [];
let arrayGastos = [];

function restablecerValores (){
    document.getElementById("descripcionMovimiento").value = "";
    document.getElementById("dineroMovimiento").value = "";
}

function mostrarMovimientos(){
    console.log("Funcion mostrarMovimientos");
    const columnasMovimientos = document.getElementsByClassName("movimientosIngresos");
    columnasMovimientos[0].innerHTML = "";
    columnasMovimientos[1].innerHTML = "";
}

function introducirMovimiento () {
    console.log("Funcion introducirMovimiento");
    let signoSelect = document.getElementById("signo");
    let signo = signoSelect.options[signoSelect.selectedIndex].value;
    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valor = document.getElementById("dineroMovimiento").value;
    console.log(signo);

    if(descripcion == "" || valor == ""){
        document.getElementById("mensajeError").innerHTML = "Introducir valores correctos";
        setTimeout(() => document.getElementById("mensajeError").innerHTML = "", 4000);
    }
    else if( signo == "positivo"){
    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valor = document.getElementById("dineroMovimiento").value;

    let movimiento = new Ingreso (descripcion, valor);
    arrayIngresos.push(movimiento);

    mostrarMovimientos();
    restablecerValores();

    console.log(arrayIngresos);
    }
    else if( signo == "negativo"){

    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valor = document.getElementById("dineroMovimiento").value;

    let movimiento = new Gasto (descripcion, -valor);
    arrayGastos.push(movimiento);

    mostrarMovimientos();
    restablecerValores();

    console.log(arrayGastos);
        
    }
    

    
}

document.getElementById("tickAdd").addEventListener("click", introducirMovimiento);