//....................1.............................
let num1 = prompt("Ingrese el valor del numero 1")
let num2 = prompt("Ingrese el valor del numero 2")
let num3 = prompt("Ingrese el valor del numero 3")

if (num1>num2){
    console.log(num1 + " es mayor que "+ num2)
} 
else if (num1 < num2){
    console.log(num1 +" NO es mayor que "+ num2);
}


//...................2..................................
if (num1 == num2){
    console.log(num1 + " es igual que "+ num2)
} 
else if (num1 != num2){
    console.log(num1 +" NO es igual que "+ num2);
}


//.......................3..........................................
if (num1 > num2){
    console.log(num1 + " es mas grande que "+ num2)
} 
else if (num2 > num1){
    console.log(num2+ " es mas grande que "+ num1);
}

else if (num2 === num1){
    console.log(num2+ " es igual que "+ num1);
}


//................................4..............................
if (num1 < num2 && num1 < num3){
    console.log(num1 + " es el más chico")
} 

else if (num2 < num1 && num2 < num3){
    console.log(num2 + " es el más chico")
} 

else if (num3 < num1 && num3 < num2){
    console.log(num3 + " es el más chico")
} 


//.............................5......................
let persona1 = {
    Nombre: "Estefany",
    Edad:32,
    Altura: 160,
}

let persona2 = {
    Nombre: "Lucia",
    Edad: 38,
    Altura: 163,    
} 

if (persona1.Edad > persona2.Edad){
    console.log(persona1.Nombre + " es mayor que " + persona2.Nombre)
} else {
    console.log(persona2.Nombre + " es mayor que " + persona1.Nombre)
}


if (persona1.Altura > persona2.Altura){
    console.log(persona1.Nombre + " es más alta que " + persona2.Nombre)
} else {
    console.log(persona2.Nombre + " es más alta que " + persona1.Nombre)
}


//..........................6.........................
let Nombre = prompt ("Ingrese su nombre")
let Edad = prompt ("Ingrese su edad")
let Altura = prompt ("Ingrese su altura")
let Vision = prompt ("Del 1 al 10, ingrese su grado de visión")

if (Edad >= 18 && Altura >= 150 && Vision >= 8){
    console.log("La persona está capacitada para conducir")
} else {
    console.log("La persona NO está capacitada para conducir")
}


//...........................7......................
let nombre = prompt("ingrese su nombre")
let entrada = prompt("posee entrada si/no")
let pase = prompt("ingrese si posee pase vip/normal")

if (nombre === "Estefany" || pase === "vip" ) {
    alert("bienvenido!")
    console.log("bienvenido!");
    
} else if (entrada === "si"){
    let usarEntrada = prompt("desea usar entrada si/no ?")
    if(usarEntrada === "si"){
        alert("bienvenido")
        console.log("bienvenido");
    } else{
        alert("gracias por venir")
        console.log("gracias por venir");
    }
} else {
    let deseaComprar = prompt("desea comprar entrada si/no?")
    if (deseaComprar === "si") {
        let dinero = parseInt(prompt("ingrese su dinero disponible"))
        if (dinero>=1000) {
            alert("venta exitosa, bienvenido!")
            console.log("venta exitosa, bienvenido!");

        } else {
            alert("fondos insuficientes")
            console.log("fondos insuficientes");
        }
        
    } else {
        alert("gracias por venir")
        console.log("gracias por venir");
    }
}


//..........................8......................................
let numeroIncognito = 5
let numeroIngresado = parseInt(prompt("tienes tres intentos escribe un numero entre 1 al 10")) 

if (numeroIngresado === numeroIncognito){
    alert("GANASTE")
} else{
    if(numeroIngresado > numeroIncognito){
        alert("el numero ingresado es mayor, vuelve a intentarlo")
    } else{
        alert("el numero ingresado es menor, vuelve a intentarlo")
    }

    numeroIngresado = parseInt(prompt("segundo intento, ingrese numero")) 

    if(numeroIngresado === numeroIncognito){
        alert("GANASTE")
    } else{
        if (numeroIngresado > numeroIncognito) {
            alert("el numero ingresado es mayor, vuelve a intentarlo")
            
        } else{
            alert("el numero ingresado es menor, vuelve a intentarlo")
        }

        numeroIngresado = parseInt(prompt("tercer intento, ingrese numero")) 

        if (numeroIngresado === numeroIncognito) {
            alert("GANASTE")
            
        } else{
            alert("Lo siento, jugamos en otra oportunidad!")
        }

       
    }


}


//.............................9.........................................
let edadPersona = prompt("ingrese su edad")

if (edadPersona >=0 && edadPersona<=12){
    alert("eres un infante!")
    console.log("eres un infante!");
} else if (edadPersona>=13 && edadPersona<=18){
    alert("eres un adolescente!")
    console.log("eres un adolescente!");
} else if (edadPersona>=19 && edadPersona<=45){
    alert("eres un joven mayor!")
    console.log("eres un joven mayor!");
} else if (edadPersona>=46 && edadPersona<=100){
    alert("eres un anciano!")
    console.log("eres un anciano!"); 
} else {
    alert("¿en verdad es tu edad?")
    console.log("¿en verdad es tu edad?");
}


//...........................10..............................
alert("PIEDRA, PAPEL O TIJERAS");

let jugador1 = prompt("PLAYER 1 : (piedra/papel/tijeras)")
let jugador2 = prompt("PLAYER 2 : (piedra/papel/tijeras)")


if (jugador1===jugador2) {
    alert("EMPATE")
    console.log("EMPATE");
} else if( jugador1 === "piedra") {
    if (jugador2 === "papel"){
        alert("gana jugador 2")
        console.log("gana el jugador 2");
    } else if(jugador2 === "tijera"){
        alert("gana jugador 1")
        console.log("gana jugador 1");
    } else {
        alert("juador 2 esta haciendo trampa")
        console.log("jugador 2 esta haciendo trampa");
    }
       

} else if (jugador1 === "papel"){
    if (jugador2 === "piedra"){
        alert("gana jugador 1")
        console.log("gana el jugador 1");
    } else if(jugador2 === "tijera"){
        alert("gana jugador 2")
        console.log("gana jugador 2");
    } else {
        alert("juador 2 esta haciendo trampa")
        console.log("jugador 2 esta haciendo trampa");
    }

}  else if (jugador1 === "tijera"){
    if (jugador2 === "piedra"){
        alert("gana jugador 2")
        console.log("gana el jugador 2");
    } else if(jugador2 === "papel"){
        alert("gana jugador 1")
        console.log("gana jugador 1");
    } else {
        alert("juador 2 esta haciendo trampa")
        console.log("jugador 2 esta haciendo trampa");
    }

} else {
    alert("juador 1 esta haciendo trampa")
    console.log("jugador 1 hace trampa");
}


//..........................11....................................
let colores = prompt("que color usas")

switch(colores){
    case "blanco" && "negro":
        alert("falta de color")
        break;

    case "verde":
        alert("color de la naturaleza")
        break;
    
    case "azul":
        alert("color de la naturaleza")
        break;

     case "amarillo":
        alert("color de la naturaleza")
        break;

     case "rojo":
        alert("color de la naturaleza")
        break;

    case "marron":
            alert("color de la naturaleza")
            break;
        default: alert("excelente eleccion, no lo teniamos pensado")

}

//............................12......................
let num1 = parseInt(prompt("Ingrese el valor del primer número")) 
let operacion = prompt("Ingrese el simbolo +,  -,  * o / según la operación que desee calcular")
let num2 = parseInt(prompt("Ingrese el valor del segundo número")) 
let resultado;

switch(operacion){
    case "+":
        resultado = num1+num2;
        alert("La suma de " + num1 +" + " + num2 + " es igual a " +resultado)
        break;
    case "-":
        resultado = num1-num2;
        alert("La resta de " + num1 +" - " + num2 + " es igual a " +resultado)
        break;
    case "*":
        resultado = num1*num2;
        alert("La multiplicación de " + num1 +" * " + num2 + " es igual a " +resultado)
        break;
    case "/":
        if (num2 !== 0){
            resultado = num1/num2;
            alert("La división de " + num1 +" / " + num2 + " es igual a " +resultado)

        } else {
            alert("ERROR: No se puede dividir por cero.");
        }
        break;
    default:
        alert("Operación no válida. Por favor ingrese suma, resta, multiplicación o división.")
}


//........................13.............................................
let nombre = prompt(" ingrese su nombre")
let apellido = prompt(" ingrese su apellido")
let documentoNacional =prompt(" ingrese su documento nacional")
let fechaNacimiento = prompt(" ingrese su fecha de nacimiento")
let lugarNacimiento = prompt(" ingrese su lugar de nacimiento")

let mensajedating = "datos ingresados: \n" + 
"nombre:" + nombre + "\n" +
"apellido" + apellido + "\n" +
"numero de documento" + documentoNacional + "\n" +
"fecha de nacimiento" + fechaNacimiento + "\n" +
"lugar de nacimiento" + lugarNacimiento + "\n" +
"los datos ingresados son correctos?"

let confirmacion = confirm(mensajedating)

if(confirmacion){
   let dni = {
       nombre:nombre,
       apellido: apellido,
       numeroDeDocumento: documentoNacional,
       fechadenacimiento: fechaNacimiento,
       lugardenacimiento: lugarNacimiento

   }
   console.table(dni)
   console.log("felicidades su registro fue exitoso");
} else{
   console.log("vuelva a intentarlo en un mes");
}
