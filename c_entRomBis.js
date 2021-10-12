
let  xR =[],
    uR = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],//unidades romanas.

    dR = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],//decenas romanas.
    cR = ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],//centenas romanas.
    mR = ["","M", "MM", "MMM", "-IV-", "-V-", "-VI-", "-VII-", "-VIII-", "-IX-"];//millares romanos.

let unoArray = [ xR, uR ],
    dosArray = [ xR, dR, uR ],
    tresArray = [ xR, cR, dR, uR ],
    cuatArray = [ xR, mR, cR, dR, uR ];

/*convierte un integer a cadena
  return: un array de caracteres con las cifras de un número.*/
function cifrasDeNumero(t){
    var n = ""+t ;
    var cargador = [];

    for(let i =0; i <n.length; i++){

        cargador[i] = n.charAt(i);
    }

    return cargador;
}


function enterosARomanos(num = undefined){

    let cargador = cifrasDeNumero(num);//array con las cifras de un número.
    let numPos = cargador.length ;//longitud del array.

    let cifraRomana = "";

    for ( let i = 1; i <= numPos; i++ ){

        let nn = parseInt(cargador[i -1]);

        if ( numPos == "2"){
            if ( nn !== 0 ){
                cifraRomana +=  dosArray[i][nn];
            }
        }
        else if(numPos == "1"){
            if ( nn !== 0 ){
                cifraRomana +=  unoArray[i][nn];
            }
        }
        else if(numPos == "3" ){
            if ( nn !== 0 ){
                cifraRomana +=  tresArray[i][nn];
            }
        }
        else if(numPos == "4") {
            if ( nn !== 0 ){
                cifraRomana +=  cuatArray[i][nn];
            }
        }
    }

    return cifraRomana;

}


function bConversor(num = undefined){

    if(num === undefined) return console.log("no has ingresado número");
    if(num === 0) return console.log("los romanos no trabajaban con el nº 0.");
    if(typeof num !== "number") return console.log(`el valor ${num} no es un número` );
    if(Math.sign(num) <0)return console.log(`el valor ${num} no es positivo` );
    if(num > 9999999999)return console.log(`Error, el valor ${num} es mayor de 9.999.999.999` );

    let d = Math.floor(num /1000),
        e = num % 1000,
        f = Math.floor(num /1000000),
        g = Math.floor(num % 1000000),
        h = Math.floor(g / 1000);

    let romanos;
    if(d > 1  && d <= 999 ){

       romanos =  '-'+enterosARomanos(d)+ '-';
       romanos +=  enterosARomanos(e);

    }
    if(d >= 1999 ){

        romanos =  '*' +enterosARomanos(f)+ '*';
        if (h != 0 ){
            romanos +=  '-'+enterosARomanos(h)+ '-';
        }
        romanos +=  enterosARomanos(e);
    }
    if(d === 0){

        romanos = enterosARomanos(e);
    }

    return romanos;
}// --------------------------- Fin function bConversor(... )

console.log( ".");
console.log( "Pasa nº enteros a numeros romanos. Cifras inferiores a 10.000 millones, y mayores a 0.");
console.log( "  -Las cifras entre * *, representan millones, las cifras entre - - representan miles.");

console.log('Más información: https://www.youtube.com/watch?v=2r7nFyKRolU');

let valor = Math.round(Math.random()*10000000000);;

console.log( ".");
console.log( 'Número: ' +valor+ ' pasado a nº romanos: ' +bConversor(valor) );


















/*
let totalCifras = numR(valor);

console.log(".---");
console.log( valor+ ' tiene ' +totalCifras[1]+ ' cifras y su módulo 3 es ' +totalCifras[1] % 3
    + ' centenas: ' +totalCifras[2]);
console.log( valor+ ' dividido entre 1000 === ' +Math.floor( valor /1000 ));
console.log(".");
console.log( valor+ ' modulo 10000 === ' +valor % 1000 );


*/

let ver = true, aCont = 0, $array = [];
/*Return: un array con la cantidad de nº que tiene la cifra
           y con la cantidad de cientos que tiene la cifra.  */
function numR(cifra){

    let x = cifra;
    var n = ""+cifra, cargador = [];

    while ( ver  ) {

        x = Math.floor(x / 10);
        if(x == 0){ver = false};
        aCont++;
    }

    for(let i =0; i <n.length; i++){

        cargador[i] = n.charAt(i);
    }

    $array[0] = cargador;// 1º posición del array con un array que tiene las diferentes cifras del nº.
    $array[1] = aCont;// 2º posición del array con la cantidad total de cifras que compone el nº.
    $array[2] = Math.floor(aCont/3);//3º posición del array con la cantidad total de cientos que compone el nº.

    return $array;
}




function conversor(num = undefined){

    let valores = numR(num);
    var  nmros = valores[1], // total de cifras que tiene el nº.
        resultado = ""; // concatena el resultado final.

    for(let i = 1; i <= nmros; i++){
        let a = (i-1),
            nn = $array[0][a];// 'nn' es cada uno de los nº de la cifra

        if(nmros <= 2){// soporta hasta la cifra  99.

            if(nmros === 1){// soporta hasta la cifra  9.
                resultado += unoArray[i][nn];
            }
            else{
                resultado += dosArray[i][nn];
            }
        }
        else if(nmros <= 3 ){// soporta hasta la cifra  999.

            resultado += tresArray[i][nn];
        }
        else if(nmros <= 4 ){// soporta hasta la cifra  9999.

            resultado += cuatArray[i][nn];
        }

    }// ----------------------- Fin for(let i = 1; i <= nmros; i++){

    return resultado;
}// --------------------------- Fin function conversor(



//for(let a = c; a < b; a++){

// console.log( a+ ' pasado a nº romanos ' +bConversor(a) );
//}




//let result = numR(111222333444555666); //   111 222 333 444 555 666
/*
console.log( `Cifras del nº --> ${$array[0]}, Cantidad de cifras --> ${$array[1]},
                Cantidad de cientos --> ${$array[2]}`);
*/




