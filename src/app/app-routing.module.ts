import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAreaComponent } from './client-area/client-area.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
    { path: '', redirectTo: '/client-area', pathMatch: 'full' },
    { path: 'client-area', component: ClientAreaComponent },
    { path: 'address', component: AddressComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }