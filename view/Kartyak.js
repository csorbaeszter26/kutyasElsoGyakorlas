import { Kartya } from "./Kartya.js";


export default class Kartyak {

    #lista = []
    #szuloElem

    //konstruktor:
    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.kartyakKiir()
    }

    //fuggvény:
    kartyakKiir(){
        this.#lista.forEach((elem)=>{
            // páldányosítok:
            new Kartya(elem, this.#szuloElem)
        
        })
    }

}