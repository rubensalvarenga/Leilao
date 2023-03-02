import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

    slides = [
      {id: 1, img: "../../../assets/img/carrossel-img1.jpg"},
      {id: 2, img: "../../../assets/img/carrossel-img2.jpg"},
      {id: 3, img: "../../../assets/img/carrossel-img3.jpg"},
      {id: 4, img: "../../../assets/img/carrossel-img4.jpg"},
      {id: 5, img: "../../../assets/img/carrossel-img5.jpg"},
      {id: 6, img: "../../../assets/img/carrossel-img6.jpg"},
      {id: 6, img: "../../../assets/img/carrossel-img1.jpg"}
    ];
}
