import { Padre  } from "./padre";
export class Hijo extends Padre{
    private atributoHijo1: number
    private atributoHijo2: string

    constructor(atributoHijo1: number, atributoHijo2: string, atributoPadre: string) {
        super(atributoPadre)
        this.atributoHijo1 = atributoHijo1
        this.atributoHijo2 = atributoHijo2
    }

    setatributoHijo1(atributoHijo1: number){
        this.atributoHijo1 = atributoHijo1
    }

    setatributoHijo2(atributoHijo2: string){
        this.atributoHijo2 = atributoHijo2
    }

    getatributoHijo1(){
        return this.atributoHijo1
    }

    getatributoHijo2(){
        return this.atributoHijo2
    }

    mostrarAtributos(): string {
        return this.atributoHijo1 + "\n" + this.atributoHijo2 + "\n" + this.atributoPadre
    }





}
