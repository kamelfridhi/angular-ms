import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfficherchambreComponent} from "./Components/chambre/afficherchambre/afficherchambre.component";
import {AjouterchambreComponent} from "./Components/chambre/ajouterchambre/ajouterchambre.component";
import {AjouterBlocComponent} from "./Components/Bloc/ajouter-bloc/ajouter-bloc.component";
import {AfficherBlocComponent} from "./Components/Bloc/afficher-bloc/afficher-bloc.component";
import {AjouterComponentEtudiant} from "./Components/Etudiant/ajouter/ajouter.component";
import {AjouterFoyerComponent} from "./Components/Foyer/ajouter-foyer/ajouter-foyer.component";
import {AfficherComponentfoyer} from "./Components/Foyer/afficher/afficher.component";
import {AjouterComponentreservation} from "./Components/Reservation/ajouter/ajouter.component";
import {AfficherComponentreservation} from "./Components/Reservation/afficher/afficher.component";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'afficherchambres', component:AfficherchambreComponent },
  { path: 'ajouterchambre', component: AjouterchambreComponent },
  { path: 'ajouterBloc', component: AjouterBlocComponent },
  { path: 'AfficherBlocComponent', component: AfficherBlocComponent },
  { path: 'AjoutetEtudiant', component: AjouterComponentEtudiant },
  { path: 'Ajoutetfoyer', component: AjouterFoyerComponent },
  { path: 'AfficherFoyer', component: AfficherComponentfoyer },
  { path: 'Ajouterreservation', component: AjouterComponentreservation },
  { path: 'Afficherreservation', component: AfficherComponentreservation },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
