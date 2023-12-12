import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherchambreComponent } from './Components/chambre/afficherchambre/afficherchambre.component';
import {HttpClientModule} from "@angular/common/http";
import { AjouterchambreComponent } from './Components/chambre/ajouterchambre/ajouterchambre.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './Components/home/home.component';
import { DeletechambreComponent } from './Components/chambre/deletechambre/deletechambre.component';
import { DeleteBlocComponent } from './Components/Bloc/delete-bloc/delete-bloc.component';
import { AjouterBlocComponent } from './Components/Bloc/ajouter-bloc/ajouter-bloc.component';
import { AfficherBlocComponent } from './Components/Bloc/afficher-bloc/afficher-bloc.component';
import { DeleteComponentetudiant } from './Components/Etudiant/delete/delete.component';
import { AjouterComponentEtudiant } from './Components/Etudiant/ajouter/ajouter.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AfficherComponent} from "./Components/Etudiant/afficher/afficher.component";
import {AjouterFoyerComponent} from "./Components/Foyer/ajouter-foyer/ajouter-foyer.component";
import {AfficherComponentfoyer} from "./Components/Foyer/afficher/afficher.component";
import {AfficherComponentreservation} from "./Components/Reservation/afficher/afficher.component";
import {AjouterComponentreservation} from "./Components/Reservation/ajouter/ajouter.component";

@NgModule({
  declarations: [
    AppComponent,
    AfficherchambreComponent,
    AjouterchambreComponent,
    HomeComponent,
    DeletechambreComponent,
    DeleteBlocComponent,
    AjouterBlocComponent,
    AfficherBlocComponent,
    DeleteComponentetudiant,
    AjouterComponentEtudiant,
    NavbarComponent,
    AfficherComponent,
    AjouterFoyerComponent,
    AfficherComponentfoyer,AfficherComponentreservation,AjouterComponentreservation,AjouterComponentreservation,AfficherComponentreservation
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
