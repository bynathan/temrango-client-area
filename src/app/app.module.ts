import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './client-area/components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterComponent } from './client-area/components/register/register.component';
import { NewAddressComponent } from './address/components/new-address/new-address.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAreaComponent,
    AddressComponent,
    ProfileComponent,
    RegisterComponent,
    NewAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
