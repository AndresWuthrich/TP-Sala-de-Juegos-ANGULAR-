import { NgAnalyzeModulesHost } from '@angular/compiler';
import { Juego } from './juego';    

export class Jugador {

    mail:string;
    pass:string;
    ganados:number;
    perdidos:number;

    constructor(mail:string, pass:string){
        this.pass=pass;
        this.mail=mail;    
    }
}
