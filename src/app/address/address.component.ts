import { Component } from '@angular/core';
import { NewAddressComponent } from './components/new-address/new-address.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  modalRef?: BsModalRef;
  
  constructor(private modalService: BsModalService) {}

  openNewAddressModal() {
    this.modalRef = this.modalService.show(
      NewAddressComponent,
      Object.assign({}, { class: 'new-address-modal' })
    );
  }
}
