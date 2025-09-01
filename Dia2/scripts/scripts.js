class persona {

    #edad; // se debe declarar la variable privada para que funcione 

    constructor (nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#edad = edad; //con # se pone un atributo privado y para que sea protegido cambia el # por _
    }
    saludar(){
        console.log(`${this.nombre} esta saludando`);
    }
    mostarEdad() {
        console.log(`${this.nombre} tiene ${this.#edad} años.`);
    }
}

p1 = new persona("pedro","gomez",25);

p2 = new persona("daniel","santos",22);
p2.saludar();
p2.mostrarEdasd();
console.log(p2["#edad"]);