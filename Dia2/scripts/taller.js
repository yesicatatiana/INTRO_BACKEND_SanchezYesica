
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
const miPerro = new Perro('Buddy', 'Golden Retriever');

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