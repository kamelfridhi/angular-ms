import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../_Models/chambre";
import {ChambreService} from "../../../_Services/chambre.service";
import {Bloc} from "../../../_Models/Bloc";

@Component({
  selector: 'app-afficher-bloc',
  templateUrl: './afficher-bloc.component.html',
  styleUrls: ['./afficher-bloc.component.css']
})
export class AfficherBlocComponent implements OnInit{
  Blocs: Bloc[] = [];


  constructor(private chambreService: ChambreService) {
  }
  ngOnInit(){
    this.loadBloces();
  }



  loadBloces() {
    this.chambreService.getAllBlocs().subscribe({
      next:(data) => {
        this.Blocs = data;
        console.log('Blocs chargées avec succès !', this.Blocs);
      },
      error:(error) => {
        console.error('Erreur lors du chargement des Blocs', error);
      }
    });}



}
