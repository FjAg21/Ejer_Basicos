




function esPrimo(num){

    let esDivisible = true;

    for(var a = 2; a < num; a++){
        if( num % a == 0){
            esDivisible =false;
            break;
        }
    }
    return esDivisible;
}

let total = 0;
let contador = 0;
function numPrimos(numero = undefined){

    if(numero === undefined) return console.warn('No ingresaste Número');
    if(typeof numero !== "number") return console.error(`el valor ${numero} no es un Nº.`);
    if(Math.sign(numero) < 0) return console.error("el número tiene que ser positivo");

    for(var i = numero; i  > 1; i--){

       // console.log("-------------------------" +esPrimo(i)+ "  " +i);

        if( esPrimo(i)){
            console.log(i);
            total +=  i;
            contador++;
        }

        //console.log("*********** " +esPrimo(i)+ "  " +i);
    }
}

numPrimos(1112);
console.log("Cantidad de Nº primos *********** " +contador );
console.log("Suma Total*********** " +total );




