import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
