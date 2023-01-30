import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNovaTransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
