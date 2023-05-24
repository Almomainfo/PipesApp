import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuracion del locate de una app
import locateEs from '@angular/common/locales/es'
import locateFr from '@angular/common/locales/fr'
import locateCa from '@angular/common/locales/ca'
import {registerLocaleData} from '@angular/common'

registerLocaleData(locateEs);
registerLocaleData(locateFr);
registerLocaleData(locateCa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
