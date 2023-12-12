import {Component, OnInit} from '@angular/core';
import {Foyer} from "../../../_Models/Foyer";
import {ChambreService} from "../../../_Services/chambre.service";
import {Reservation} from "../../../_Models/Reservation";

@Component({
  selector: 'app-afficherreservation',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponentreservation implements OnInit{
  reservations: Reservation[] = [];


  constructor(private chambreService: ChambreService) {
  }
  ngOnInit(){
    this.loadreservations();
  }



  loadreservations() {
    this.chambreService.getAllReservation().subscribe({
      next:(data) => {
        this.reservations = data;
        console.log('reservation chargées avec succès !', this.reservations);
      },
      error:(error) => {
        console.error('Erreur lors du chargement des reservation', error);
      }
    });}

}
