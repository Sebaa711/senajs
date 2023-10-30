// 1
function par() {
    const num = prompt("Ingrese un numero y se determinara si es par o impar");
    if(num % 2 === 0) {
        alert("El numero es par");
    } else alert("El numero es impar");
}

// 2
function nota() {
    const nota = prompt("Digite su nota (1-10)");
    if(nota < 0 || nota > 10) return alert("Nota invalida");
    if(nota >= 6) return alert("Ha aprobado");
    else alert("No ha aprobado");
}

// 3

function diaSemana() {
    const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    const dia = prompt("Digite el dia de la semana");
    if(isNaN(dia) || dia < 1 || dia > dias.length) return alert(`"${dia}" no equivale a ningun dia`)
    alert(`El dia ${dia} es ${dias[dia - 1]}`);
}

// 4

function mayorA() {
    const num1 = prompt("Digite el primer numero: ");
    if(isNaN(num1)) return alert(`"${num1}" no es un numero`)
    const num2 = prompt("Digite el segundo numero: ");
    if(isNaN(num2)) return alert(`"${num2}" no es un numero`)

    if(num1 === num2) return alert(`${num1} es igual a ${num2}`);
    if(num1 > num2) return alert(`${num1} es mayor a ${num2}`);
    else return alert(`${num1} es menor a ${num2}`);
}

// 5

function positivoNegativo() {
    const num = prompt("Digite el numero: ");
    if(isNaN(num)) return alert(`"${num}" no es un numero`)
    if(num < 0) return alert(`${num} es un numero NEGATIVO`)
    if(num > 0) return alert(`${num} es un numero POSITIVO`)
    return alert(`${num} es neutro`)
}

// 6 

function esMultiplo3() {
    const num = prompt("Digite el numero: ");
    if(isNaN(num)) return alert(`"${num}" no es un numero`)
    if(num % 3 === 0 || num !== 0) return alert(`${num} es un multiplo de 3`)
    return alert(`${num} no es multiplo de 3`)
}

// 7
function compararPersonas() {
    const personas = []

    const nombre1 = prompt("Digite el nombre de la primer persona")
    if(typeof nombre1 != "string") return alert("Nombre invalido")
    const edad1 = prompt("Digite la edad de la primer persona")
    if(isNaN(edad1)) return alert("Edad invalida")

    const nombre2 = prompt("Digite el nombre de la primer persona")
    if(typeof nombre2 != "string") return alert("Nombre invalido")
    const edad2 = prompt("Digite la edad de la primer persona")
    if(isNaN(edad2)) return alert("Edad invalida")

    personas.push({nombre: nombre1, edad: edad1})
    personas.push({nombre: nombre2, edad: edad2})

    let mayor = 0;
    for(let i = 1; i < personas.length; i++){
        if(personas[i].edad > personas[mayor].edad) mayor = i;
    }

    return alert(`${personas[mayor].nombre} es la persona con mas edad`)
}