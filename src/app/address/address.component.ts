import { Component } from '@angular/core';
import { NewAddressComponent } from './components/new-address/new-address.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteAddressComponent } from './components/delete-address/delete-address.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  modalRef?: BsModalRef;
  
  constructor(private modalService: BsModalService) {}

  /**
   * @description Abir modal de novo endereço.
   *
   * @author Nathan da Silva Lira
  */

  openNewAddressModal() {
    this.modalRef = this.modalService.show(
      NewAddressComponent,
      Object.assign({}, { class: 'new-address-modal' })
    );
  }

  /**
   * @description Abrir modal de deletar endereço.
   *
   * @author Nathan da Silva Lira
  */

  openDeleteAddressModal() {
    this.modalRef = this.modalService.show(
      DeleteAddressComponent,
      Object.assign({}, { class: 'delete-address-modal' })
    );
  }
}
