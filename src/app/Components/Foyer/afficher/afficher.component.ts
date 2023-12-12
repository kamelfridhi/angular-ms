import {Component, OnInit} from '@angular/core';
import {ChambreService} from "../../../_Services/chambre.service";
import {Foyer} from "../../../_Models/Foyer";

@Component({
  selector: 'app-afficherfoyer',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponentfoyer implements OnInit{
  Foyers: Foyer[] = [];


  constructor(private chambreService: ChambreService) {
  }
  ngOnInit(){
    this.loadfoyers();
  }



  loadfoyers() {
    this.chambreService.getAllFoyers().subscribe({
      next:(data) => {
        this.Foyers = data;
        console.log('Foyers chargées avec succès !', this.Foyers);
      },
      error:(error) => {
        console.error('Erreur lors du chargement des Foyers', error);
      }
    });}

}
