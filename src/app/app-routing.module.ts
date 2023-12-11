import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfficherchambreComponent} from "./Components/chambre/afficherchambre/afficherchambre.component";
import {AjouterchambreComponent} from "./Components/chambre/ajouterchambre/ajouterchambre.component";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'afficherchambres', component:AfficherchambreComponent },
  { path: 'ajouterchambre', component: AjouterchambreComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
