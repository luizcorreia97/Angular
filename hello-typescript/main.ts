var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
    return x + y;
}

// ES (schema script) - 6 ou 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];

// Javascript puro (vanila)
numeros.map(function(valor){
    return valor * 2;
});

// ES 6 ou ES 2015
numeros.map(valor => valor * 2);

class Matematica {
    soma (x, y){
        return x + y;
    }
}

// tipagem de variaveis : string ou : any
var n1: any = 'teste';
n1 = 4;