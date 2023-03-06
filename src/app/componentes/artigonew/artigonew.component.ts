import { Component,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


  closeResult = '';
  modalRef?: BsModalRef;

	constructor(private modalService: NgbModal,
              private modalService1: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService1.show(template);
  }

	open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${getDismissReason(reason)}`;
			},
		);

	function getDismissReason({ reason }: { reason: any; }): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
  }
  }
}
