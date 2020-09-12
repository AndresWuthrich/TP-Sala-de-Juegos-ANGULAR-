import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  mail:string;
  pass:string;
  pass2:string;
  yaRegistrado:boolean;

  constructor() { 
    this.yaRegistrado=true;
  }

  ngOnInit() {
  }

  acepto(){
    this.yaRegistrado=true;
  }

  registrar(mail:string, pass:string, pass2:string){
    if(pass===pass2)
    {
    }
  }  
}
