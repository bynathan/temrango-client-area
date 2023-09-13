import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private bsModalRef: BsModalRef) {}
  
   /**
   * @description Fechar modal.
   *
   * @author Nathan da Silva Lira
  */

  public closed(){
    this.bsModalRef.hide();
  }

  /**
   * @description Seleciona a opção do modal.
   *
   * @author Nathan da Silva Lira
  */

  public optionActive:string = 'geral';

  public active(option:string){
    this.optionActive = option;
  }

  /**
   * @description Ocultar ou mostrar senha dos inputs.
   *
   * @author Nathan da Silva Lira
  */

  public actionOldPassword: boolean = false;
  public actionNewPassword: boolean = true;

  public actionShowOrOcult(input:number){
    if(input === 0){
      this.actionOldPassword = !this.actionOldPassword;
    }else{
      this.actionNewPassword = !this.actionNewPassword;
    }
  }

}
