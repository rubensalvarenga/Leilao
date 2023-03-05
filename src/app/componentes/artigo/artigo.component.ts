import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


type Roman = {
  [key: string]: number;
};

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss']
})

export class ArtigoComponent {

  currentPage = 4;
  smallnumPages = 0;
  totalItems = 100;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
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
    nav: true,

  }

  optionCard: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
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
        items: 3
      }
    },
    nav: false,

  }

    slides = [
      {id: 1, img: "../../../assets/img/imovel-img1.jpg"},
      {id: 2, img: "../../../assets/img/imovel-img2.jpg"},
      {id: 3, img: "../../../assets/img/imovel-img3.jpg"},
      {id: 4, img: "../../../assets/img/imovel-img4.jpg"},
      {id: 5, img: "../../../assets/img/imovel-img5.jpg"},
      {id: 6, img: "../../../assets/img/imovel-img6.jpg"},
      {id: 6, img: "../../../assets/img/imovel-img7.jpg"}
    ];


    slides1 = [
      {id: 1, img: "../../../assets/img/imovel-img15.jpg"},
      {id: 2, img: "../../../assets/img/imovel-img9.jpeg"},
      {id: 3, img: "../../../assets/img/imovel-img11.jpg"},
      {id: 4, img: "../../../assets/img/imovel-img12.jpg"},
      {id: 5, img: "../../../assets/img/imovel-img13.jpg"},
      {id: 6, img: "../../../assets/img/imovel-img14.jpg"},
      {id: 6, img: "../../../assets/img/imovel-img8.jpg"}
    ];

    slides2 = [
      {id: 1, img: "../../../assets/img/imovel-img17.jpg"},
      {id: 2, img: "../../../assets/img/imovel-img18.jpeg"},
      {id: 3, img: "../../../assets/img/imovel-img17.jpg"},
      {id: 4, img: "../../../assets/img/imovel-img20.jpg"},
      {id: 5, img: "../../../assets/img/imovel-img21.jpg"},
      {id: 6, img: "../../../assets/img/imovel-img22.jpeg"},
      {id: 6, img: "../../../assets/img/imovel-img11.jpg"}
    ];

    slides3 = [
      {id: 1, img: "../../../assets/img/imovel-img11.jpg"},
      {id: 2, img: "../../../assets/img/imovel-img18.jpeg"},
      {id: 3, img: "../../../assets/img/imovel-img17.jpg"},
      {id: 4, img: "../../../assets/img/imovel-img20.jpg"},
      {id: 5, img: "../../../assets/img/imovel-img21.jpg"},
      {id: 6, img: "../../../assets/img/imovel-img22.jpeg"},
      {id: 6, img: "../../../assets/img/imovel-img11.jpg"}
    ];


  }
