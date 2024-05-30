/*Trabaja en los siguientes desafíos y carga tu trabajo cuando hayas terminado.*/
/*Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.*/

function siempreHambriento(arr) {
    let hayComida = false;
    
    for (var n =0; n<arr.length; n++){
    
        if (arr[n] === "comida"){
            console.log("delicioso");
            hayComida = true;
        }
    }
    if (!hayComida){
        console.log ("Tengo hambre");
    }
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// Esto mostrará "delicioso" dos veces en la consola

siempreHambriento([4, 1, 5, 7, 2]);
// Esto mostrará "Tengo hambre" en la consola
/*Dado un arreglo y un valor cutoff, 
devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.*/
function highPass(arr, cutoff) {
    var filteredArr = arr.filter(function(value)
    {
        return value >cutoff;
    });

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

/*Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.*/

function betterThanAverage(arr) {
    var sum = 0;
    for (var z = 0; z <arr.length; z++){
        sum += arr[z];

    }
    // calcula el promedio
var average= sum / arr.length; //
    var count = 0
    // cuenta cuántas variables son mayores que el promedio
    for (var z = 0; z< arr.length; z++) {
        if (arr[z] > average) { // si el número es mayor que el promedio
            count++; // incrementa el contador
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

/*Escribe una función que invierta los valores de un arreglo y los devuelva.*/
function reverse(arr) {
    // tu código aquí
    var newArr =[];
    for (var j = arr.length -1; j >= 0; j--){
newArr.push (arr[j]);
    }
    return newArr;
    }

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

/*Arreglo de Fibonacci*/
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for (var c  = 2 ; c <n; c++){
        fibArr.push(fibArr[c-2] + fibArr[c-1]);
    }
    
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


