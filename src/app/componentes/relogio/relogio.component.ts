import {Component, OnInit, OnDestroy} from "@angular/core";

import { Observable, Subscription, of, timer } from 'rxjs';



@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})



export class RelogioComponent {

  timeSegundos: number = 60;
  timeMinutos: number = 59;
  timeHoras: number = 1;

  segundos:string = '60';
  minutos:string='59';
  horas:string='01';


  subscribeTimer: any;


  constructor() { }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeSegundos - val;
    });
  }

    interval = setInterval(() => {
      if(this.timeSegundos > 0) {
        this.timeSegundos--;
        this.segundos = ajustarZero(this.timeSegundos.toString())
      } else {
        this.timeSegundos = 60;
        if(this.timeMinutos > 0){
          this.timeMinutos--;
          this.minutos = ajustarZero(this.timeMinutos.toString())
      } else {
         this.timeMinutos = 59;
         if(this.timeHoras >0) {
           this.timeHoras --;
           this.horas = ajustarZero(this.timeHoras.toString())
      } else {
         this.timeHoras =0 ;
      }

        }
      }
    },1000)


  }



  function  ajustarZero(campo:string):string {

    var adicionar = (2-campo.length)
    if(adicionar>0){
    for (var i = 0; i < adicionar; i++) campo = '0' + campo;
    }
    return campo.toString()

  }

