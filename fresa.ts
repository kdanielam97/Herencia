import { Fruta  } from "./fruta";

export class Fresa extends Fruta {
    private Tipo: string 

    constructor(tipo: string,Color: string){
        super(Color)
        this.Tipo = tipo
    }

setTipo(Tipo:string){
    this.Tipo = Tipo
}

getTipo(){
    return this.Tipo
} 



}