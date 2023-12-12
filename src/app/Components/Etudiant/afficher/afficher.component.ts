import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../_Models/chambre";
import {ChambreService} from "../../../_Services/chambre.service";
import {Etudiant} from "../../../_Models/Etudiant";

@Component({
  selector: 'app-afficher-etudiant',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit{
  Etudiants: Etudiant[] = [];


  constructor(private chambreService: ChambreService) {
  }
  ngOnInit(){
    this.loadEtudiants();
  }



  loadEtudiants() {
    this.chambreService.getAllEtudiants().subscribe({
      next:(data) => {
        this.Etudiants = data;
        console.log('Chambres chargées avec succès !', this.Etudiants);
      },
      error:(error) => {
        console.error('Erreur lors du chargement des chambres', error);
      }
    });}



}
