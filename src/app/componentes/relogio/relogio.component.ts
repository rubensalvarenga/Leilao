import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})

export class RelogioComponent {
  ticks = 0;
  ngOnInit(){

    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=> {
        this.func(t);
    });
}


}
