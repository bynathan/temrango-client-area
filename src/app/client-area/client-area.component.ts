import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.scss']
})
export class ClientAreaComponent implements OnInit {

  ngOnInit(): void {
    this.openRegisterModal();
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openProfileModal() {
    this.modalRef = this.modalService.show(
      ProfileComponent,
      Object.assign({}, { class: 'profile-modal' })
    );
  }

  openRegisterModal() {
    this.modalRef = this.modalService.show(
      RegisterComponent,
      Object.assign({}, { class: 'register-modal' })
    );
  }
}
