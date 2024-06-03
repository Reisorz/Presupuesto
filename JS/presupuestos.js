console.log("Presupuestos");

let arrayIngresos = [];
let arrayGastos = [];

function introducirMovimiento () {
    console.log("Funcion introducirMovimiento");
    let signoSelect = document.getElementById("signo");
    let signo = signoSelect.options[signoSelect.selectedIndex].value;
    console.log(signo);

    if( signo == "positivo"){
    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valor = document.getElementById("dineroMovimiento").value;

    let movimiento = new Ingreso (descripcion, valor);
    arrayIngresos.push(movimiento);

    console.log(arrayIngresos);
    }
    else if( signo == "negativo"){

    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valor = document.getElementById("dineroMovimiento").value;

    let movimiento = new Gasto (descripcion, -valor);
    arrayGastos.push(movimiento);

    console.log(arrayGastos);
        
    }
    

    
}

document.getElementById("tickAdd").addEventListener("click", introducirMovimiento);