import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categorianew',
  templateUrl: './categorianew.component.html',
  styleUrls: ['./categorianew.component.scss']
})
export class CategorianewComponent {
  customOptions: OwlOptions = {

    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    autoplay: true,
    items:7,
    autoWidth:true,

     responsive: {
      0: {
        items: 4
      },
      400: {
        items: 7
      },
      740: {
        items: 7
      },
      940: {
        items: 7
      }
    },
    nav: true
  }

    categorias = [
      {id: 1, img: "/assets/img/icon-imoveis.png"},
      {id: 2, img: "/assets/img/icon-carro.png"},
      {id: 3, img: "/assets/img/icon-caminhoes-onibus.png"},
      {id: 4, img: "/assets/img/icon-navegacao.png"},
      {id: 5, img: "/assets/img/icon-maquinas-pesadas.png"},
      {id: 6, img: "/assets/img/icon-industria.png"},
      {id: 6, img: "/assets/img/icon-movimentacoes.png"},
      {id: 6, img: "/assets/img/icon-computadores.png"},
      {id: 6, img: "/assets/img/icon-eletrodomesticos.png"},
      {id: 6, img: "/assets/img/icon-construcao.png"},
      {id: 5, img: "/assets/img/icon-cozinha.png"},
      {id: 6, img: "/assets/img/icon-sofa.png"},
      {id: 6, img: "/assets/img/icon-alimento-e-bebidas.png"},
      {id: 6, img: "/assets/img/icon-oportunidades.png"},
      {id: 6, img: "/assets/img/icon-joias.png"},
      {id: 6, img: "/assets/img/icon-animal.png"},
      {id: 6, img: "/assets/img/icon-sucatas.png"}
    ];
}
