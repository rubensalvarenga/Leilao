import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categorianew',
  templateUrl: './categorianew.component.html',
  styleUrls: ['./categorianew.component.scss']
})
export class CategorianewComponent {
  customOptionsnew: OwlOptions = {

    center: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    autoplay: false,
    items:7,
    autoWidth:true,
    autoHeight:true,

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
      {idnew: 11, imgnew: "/assets/img/icon-imoveis.png"},
      {idnew: 21, imgnew: "/assets/img/icon-carro.png"},
      {idnew: 31, imgnew: "/assets/img/icon-caminhoes-onibus.png"},
      {idnew: 41, imgnew: "/assets/img/icon-navegacao.png"},
      {idnew: 51, imgnew: "/assets/img/icon-maquinas-pesadas.png"},
      {idnew: 16, imgnew: "/assets/img/icon-industria.png"},
      {idnew: 26, imgnew: "/assets/img/icon-movimentacoes.png"},
      {idnew: 36, imgnew: "/assets/img/icon-computadores.png"},
      {idnew: 46, imgnew: "/assets/img/icon-eletrodomesticos.png"},
      {idnew: 56, imgnew: "/assets/img/icon-construcao.png"},
      {idnew: 65, imgnew: "/assets/img/icon-cozinha.png"},
      {idnew: 86, imgnew: "/assets/img/icon-alimento-e-bebidas.png"},
      {idnew: 96, imgnew: "/assets/img/icon-oportunidades.png"},
      {idnew: 116, imgnew: "/assets/img/icon-joias.png"},
      {idnew: 126, imgnew: "/assets/img/icon-animal.png"},
      {idnew: 136, imgnew: "/assets/img/icon-sucatas.png"}
    ];
}
