// Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

const notas = [9, 7, 4];

const sacarPromedio = (array) => {
    const sumarNotas = (array[0] + array[1] + array[2]) / 3;
    return sumarNotas;
}

console.log(sacarPromedio(notas));

// Dado un array de cualquier cantidad de numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso. (Nota: recordá que podes saber la longitud de un array con array.length)

const notas = [7, 10, 6];

const sacarPromedio = (array) => {
    let sumarNotas = 0;
    for (let i = 0; i < array.length; i++) {
        sumarNotas = sumarNotas + array[i];    
    }
    return sumarNotas / array.length;
}

console.log(sacarPromedio(notas));

// Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7.

const notas = [5, 5, 5, 5, 5, 5, 5, 9, 10, 8];

const sacarPromedio = (array) => {
    let sumarNotas = 0;
    let sumarCantidadDeNumeros = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 7) {
            sumarNotas = sumarNotas + array[i];
            sumarCantidadDeNumeros = sumarCantidadDeNumeros + 1;
        }
    }
    return sumarNotas / sumarCantidadDeNumeros;
}

console.log(sacarPromedio(notas));

// Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, se requiere retornar cuál fue la mayor temperatura.

const temperaturas = [10, 4, 31, 14, 16, 38, 5, 2]

const sacarMayorTemperatura = (array) => {
    let identificarTemperatura = 0;
    for (let i = 0; i < array.length; i++) {
        if (temperaturas[i] > identificarTemperatura) {
            identificarTemperatura = temperaturas[i];
        }
    }
    return identificarTemperatura;
}

console.log(sacarMayorTemperatura(temperaturas));