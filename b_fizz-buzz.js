console.log(" ");

let num = 99;

let mU = 3, mD = 5;

for(let i = 1; i < num; i++) {

    let vf3 = true;
    let vf5 = true;

    if (i % mU === 0 || i % mD === 0) {

        vf3 = true;
        vf5 = true;
        if (i % mU === 0 && i % mD === 0) {
            console.log(i + ' fizz-fizz buzz-buzz');
            vf3 = false;
            vf5 = false;

        }

        if( i % mU === 0 && vf3 === true) {
            console.log(i + ' fizz');
        }
        if( i % mD === 0 && vf3 === true) {
            console.log(i + ' buzz');
        }
    }
    else {console.log(i );}

}