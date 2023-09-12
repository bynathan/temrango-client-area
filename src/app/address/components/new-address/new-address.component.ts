import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss']
})
export class NewAddressComponent {
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
