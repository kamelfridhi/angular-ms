import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherchambreComponent } from './Components/chambre/afficherchambre/afficherchambre.component';
import {HttpClientModule} from "@angular/common/http";
import { AjouterchambreComponent } from './Components/chambre/ajouterchambre/ajouterchambre.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherchambreComponent,
    AjouterchambreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
