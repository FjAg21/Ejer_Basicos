
let aComo = "-";
let bComo = true;
let xR = [];

let uR = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];//unidades romanas.
let dR = ["0", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];//decenas romanas.
let cR = ["0","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];//centenas romanas.
let mR = ["0","M", "MM", "MMM", "-IV-", "-V-", "-VI-", "-VII-", "-VIII-", "-IX-"];//millares romanos.

let unoArray = [ xR, uR ];
let dosArray = [ xR, dR, uR ];
let tresArray = [ xR, cR, dR, uR ];
let cuatArray = [ xR, mR, cR, dR, uR ]; //xR, uR, dR, cR, mR      mR, cR, dR, uR, xR

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

/*Recibe un número entero y lo imprime en números romanos*/
function enterosARomanos(num = undefined){

    if(num === undefined) return console.log("no has ingresado número");
    if(typeof num !== "number") return console.log(`el valor ${num} no es un número` );
    if(Math.sign(num) <0)return console.log(`el valor ${num} positivo` );
    if(num > 9999)return console.log(`Error, el valor ${num} es mayor de 9999` );

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

    return `${num} pasado a nº Romanos = ${cifraRomana}`;

}

console.log(enterosARomanos(9009) );
console.log('Los valores entre - - son miles.');
