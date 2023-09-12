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
   * @description Adicionar valor em input de press.
   *
   * @author Nathan da Silva Lira
  */
  // FORM 1
  public kids:number = 0;
  public adults:number = 0;
  public elderly:number = 0;

  // FORM 2
  public dogs:number = 0;
  public cats:number = 0;
  public others:number = 0;

  // FUNCTIONS
  public add(type: string){
    if (type === 'kids' && this.kids < 100) {
      this.kids++;
    } else if (type === 'adults' && this.adults < 100) {
      this.adults++;
    } else if (type === 'elderly' && this.elderly < 100) {
      this.elderly++;
    } else if (type === 'dogs' && this.dogs < 100) {
      this.dogs++;
    } else if (type === 'cats' && this.cats < 100) {
      this.cats++;
    } else if (type === 'others' && this.others < 100) {
      this.others++;
    }
  }

  public remove(type: string){
    if (type === 'kids' && this.kids > 0) {
      this.kids--;
    } else if (type === 'adults' && this.adults > 0) {
      this.adults--;
    } else if (type === 'elderly' && this.elderly > 0) {
      this.elderly--;
    } else if (type === 'dogs' && this.dogs > 0) {
      this.dogs--;
    } else if (type === 'cats' && this.cats > 0) {
      this.cats--;
    } else if (type === 'others' && this.others > 0) {
      this.others--;
    }
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

  /**
   * @description Condição do focus.
   *
   * @author Nathan da Silva Lira
  */

  public focusCondition:boolean = false;


}
