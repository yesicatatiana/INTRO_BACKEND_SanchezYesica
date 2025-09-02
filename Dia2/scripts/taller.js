
// #####################
// ####### DIA 2 #######
//  ####################



// la herencia: permite que una clase (hija) herede propiedades y métodos de otra
// (padre) para reutilizar y extender código. 

// La encapsulación: agrupa datos y métodos en una unidad (la clase), ocultando los detalles
// internos y restringiendo el acceso externo para proteger la integridad de los datos. 

// El polimorfismo: permite que objetos de diferentes clases respondan al mismo mensaje o método 
// de manera distinta, adoptando múltiples formas y aportando flexibilidad al código




// HERENCIA

// En JavaScript, la herencia se implementa con la palabra clave (extends) para crear clases hijas que heredan de clases padres.
// Se utiliza (super()) dentro del constructor de la clase hija para llamar al constructor de la clase padre y así inicializar propiedades heredadas.
// También se pueden sobrescribir métodos (personalizar el comportamiento) y añadir propiedades o métodos nuevos en la clase hija



// Clase Padre (Superclase)
class Animal {
    constructor(nombre) {
        this.nombre = nombre; // Propiedad compartida
    }

    hablar() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

// Clase Hija (Subclase) que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase padre (Animal)
        this.raza = raza; // Propiedad adicional de la clase Perro
    }

    // Sobrescribe el método 'hablar' de la clase padre
    hablar() {
        console.log(`${this.nombre} dice ¡Guau!`);
    }

    // Método nuevo exclusivo de la clase Perro
    ladrar() {
        console.log(`${this.nombre} ladra mucho.`);
    }
}

// Creamos una instancia de la clase hija
const mPerro = new Perro('Buddy', 'Golden Retriever');

miPerro.hablar();   // Imprime: "Buddy dice ¡Guau!" (Se usa el método sobrescrito)
miPerro.ladrar();   // Imprime: "Buddy ladra mucho." (Se usa el método nuevo)

// También puede acceder al método de la clase padre si no estuviera sobrescrito:
// console.log(miPerro.nombre); // Imprime: "Buddy" (Propiedad heredada)



// ____________________________________________________________________________________________

/*
class persona {
    constructor (nombre){
        this.nombre = nombre;
    }

    hablar(){
        console.log(`${this.nombre} dice hola!`)
    }

}


class mujer extends persona {
    constructor (nombre,genero){
        super(nombre);
        this.genero = genero;
    }
    hablar(){
        console.log(`${this.nombre} dice chao`);
    }

    caminar() {
        console.log(`${this.nombre} camina mucho`);
    }
}

const miPersona = new persona ('sofio','hombre');

miPersona.hablar();
miPersona.caminar();
*/



//______________________________________________________________________________________________



class figura {
    constructor(forma){
        this.forma = forma;
    }

    rodar(){
        console.log(`el ${this.forma} rueda derecho`)
    }
}

class cuadrado extends figura {
    constructor(forma,color){
        super(forma);
        this.color = color;
    }

    rodar(){
        console.log(`el ${this.forma} no es redondo`)
    }

    color(){
        console.log(`el ${this.forma}`)
    }
}

const miFigura = new figura ('redondo','azul')

miFigura.rodar();
miFigura.color();


//___________________________________________________________________________





// ENCAPSULACION

// es el principio de agrupar los datos (atributos) y los métodos (funciones) de un objeto 
// en una sola unidad (una clase) y restringir el acceso directo a ellos desde el exterior


class CuentaBancaria {
    constructor(numeroCuenta, titular) {
    // Datos privados (convención de nomenclatura con guion bajo)
        this._numeroCuenta = numeroCuenta;
        this._titular = titular;
        this._saldo = 0;
    }

  // Método público para depositar ( Setter con lógica)
    depositar(monto) {
    if (monto > 0) {
        this._saldo += monto;
        console.log(`Depósito exitoso. Saldo actual: ${this._saldo}`);
    } else {
        console.log("El monto debe ser positivo.");
        }
    }

  // Método público para retirar ( Setter con lógica)
    retirar(monto) {
    if (monto > 0 && this._saldo >= monto) {
        this._saldo -= monto;
        console.log(`Retiro exitoso. Saldo actual: ${this._saldo}`);
    } else if (monto <= 0) {
        console.log("El monto debe ser positivo.");
    } else {
        console.log("Saldo insuficiente.");
        }
    }

  // Método público para obtener el saldo ( Getter)
    getSaldo() {
        return this._saldo;
    }

  // Método público para obtener los detalles de la cuenta
    getDetallesCuenta() {
        return `Número de cuenta: ${this._numeroCuenta}, Titular: ${this._titular}, Saldo: ${this._saldo}`;
    }
}

// Uso de la clase
const miCuenta = new CuentaBancaria("12345", "Juan Pérez");
miCuenta.depositar(1000); // "Depósito exitoso. Saldo actual: 1000"
miCuenta.retirar(200); // "Retiro exitoso. Saldo actual: 800"
console.log(miCuenta.getSaldo()); // 800
// miCuenta._saldo = 10000; // Esto no funcionaría como se espera, el _saldo se mantiene 800



// _____________________________________________________________________________________________________


// POLIMORFISMO

//permite que objetos de diferentes clases respondan a un mismo mensaje (método) 
// de manera específica para cada uno, haciendo el código más flexible y reutilizable


// Definición de clases
class Perro {
    ladrar() {
        return "¡Guau, guau!";
    }
}

class Gato {
    maullar() {
        return "¡Miau, miau!";
    }
}

class Pato {
    graznar() {
        return "¡Cuac, cuac!";
    }
}

// Función que espera un objeto con un método 'hacerSonido'
function hacerSonido(animal) {
  // Asume que el animal tiene un método 'hacerSonido'
  // En un sistema estricto, esto requeriría una interfaz.
  // En JavaScript, se comprueba en tiempo de ejecución.
    console.log(animal.hacerSonido());
}

// Creamos diferentes objetos
const miPerro = {
    hacerSonido: function() { return "¡Guau, guau!"; }
};

const miGato = {
    hacerSonido: function() { return "¡Miau, miau!"; }
};

const miPato = {
    hacerSonido: function() { return "¡Cuac, cuac!"; }
};

// Llamamos a la función con objetos de diferentes tipos
hacerSonido(miPerro); // Imprime: ¡Guau, guau!
hacerSonido(miGato);  // Imprime: ¡Miau, miau!
hacerSonido(miPato);  // Imprime: ¡Cuac, cuac!

// Ejemplo con polimorfismo a través de clases (si tuvieran el mismo método)
class Animal {
    hacerSonido() {
        return "Sonido de animal";
    }
}

class PerroHerencia extends Animal {
    hacerSonido() { // Sobrescribe el método de la clase padre
        return "¡Guau, guau!";
    }
}

class GatoHerencia extends Animal {
    hacerSonido() { // Sobrescribe el método de la clase padre
        return "¡Miau, miau!";
    }
}

const miPerro2 = new PerroHerencia();
const miGato2 = new GatoHerencia();

console.log(miPerro2.hacerSonido()); // Imprime: ¡Guau, guau!
console.log(miGato2.hacerSonido());  // Imprime: ¡Miau, miau!