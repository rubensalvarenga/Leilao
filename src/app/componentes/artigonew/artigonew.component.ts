import { Component } from '@angular/core';

@Component({
  selector: 'app-artigonew',
  templateUrl: './artigonew.component.html',
  styleUrls: ['./artigonew.component.scss']
})
export class ArtigonewComponent {

  url: string = "../../../assets/img/imovel-img1.jpg";
  imageChange(event: any){
      this.url = event.target.src;
  }

  url1: string = "../../../assets/img/imovel-img8.jpg";
  imageChange1(event: any){
      this.url1 = event.target.src;
  }
}
