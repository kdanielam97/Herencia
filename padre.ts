export class Padre {
    protected atributoPadre: string

    constructor(atributoPadre: string){
        this.atributoPadre = atributoPadre
    }

    setatributoPadre(atributoPadre: string){
        this.atributoPadre = atributoPadre
    }

    getatributoPadre(){
        return this.atributoPadre
    }

mostrarAtributos(): string{
    return this.atributoPadre
}


}