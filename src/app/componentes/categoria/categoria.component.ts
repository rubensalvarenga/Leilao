import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Options, LabelType } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})


export class CategoriaComponent {

  Anterior :string = "Anterior";

  modalRef?: BsModalRef;

/* ranger */
  minValue: number = 50000;
  maxValue: number = 9885000;

  mascaraMin = this.minValue.toLocaleString("pt-BR",
  { style: "currency" , currency:"BRL"});

  mascaraMax = this.maxValue.toLocaleString("pt-BR",
  { style: "currency" , currency:"BRL"});

  options: Options = {
    floor: 30000,
    ceil: 10000000,
    hideLimitLabels: true,
    selectionBarGradient: { from : '#fc466b',  to : '#3f5efb' },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>COMEÇO :</b> $" + value;
        case LabelType.High:
          return "<b>FIM :</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

/* fim do ranger*/

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  openModalWithClass(template: TemplateRef<any>) {


    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit() {}

   getData() {
    const scroller:any = document.querySelector('.gallery-row-scroll');
    const leftArrow:any = document.getElementById('leftArrow');
    const rightArrow:any = document.getElementById('rightArrow');



    var direction = 0;
    var active = false;
    var max = 10;
    var Vx = 0;
    var x = 0.0;
    var prevTime = 0;
    var f = 0.2;
    var prevScroll = 0;
    var time=0;

    function physics(time:any) {
      // Measure how much time has passed
      var diffTime = time - prevTime;
      if (!active) {
        diffTime = 80;
        active = true;
      }
      prevTime = time;

      // Give power to the scrolling


      Vx = (direction * max * f + Vx * (1-f)) * (diffTime / 20);

      x += Vx;
      var thisScroll = scroller.scrollLeft;
      var nextScroll = Math.floor(thisScroll + Vx);

      if (Math.abs(Vx) > 0.5 && nextScroll !== prevScroll) {
        scroller.scrollLeft = nextScroll;
        requestAnimationFrame(physics);
      } else {
        Vx = 0;
        active = false;
      }
      prevScroll = nextScroll;
    }



    leftArrow.addEventListener('mousedown', function () {
      direction = -1;
      if (!active) {
        requestAnimationFrame(physics);
      }
    });

    leftArrow.addEventListener('mouseup', function () {
      direction = 0;
    });

    rightArrow.addEventListener('mousedown', function () {
      direction = 1;
      if (!active) {
        requestAnimationFrame(physics);
      }
    });


    rightArrow.addEventListener('mouseup', function(){
      direction = 0;
    });
  }



}


