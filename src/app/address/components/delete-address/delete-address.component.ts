import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.scss']
})
export class DeleteAddressComponent {
  constructor(private bsModalRef: BsModalRef) {}
  
   /**
   * @description Fechar modal.
   *
   * @author Nathan da Silva Lira
  */

   public closed(){
    this.bsModalRef.hide();
  }
}
