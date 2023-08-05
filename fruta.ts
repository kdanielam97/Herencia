export class Fruta {
    protected Color:string

    constructor(color:string){
        this.Color = color
    }

    setColor(color:string){
        this.Color = color
    }

    getColor(){
        return this.Color
    }    

}

