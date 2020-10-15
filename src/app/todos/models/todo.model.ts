export class Todo{
    id:number;
    texto:string;
    completado:boolean

    constructor(texto:string){
       this.id=Math.random();
       this.texto = texto;
       this.completado=false; 
    }
}