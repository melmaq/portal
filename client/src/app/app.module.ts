import { BrowserModule } from '@angular/platform-browser';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-AT';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeDe, 'de-AT');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
