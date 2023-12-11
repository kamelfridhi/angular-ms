import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../_Models/chambre";
import {ChambreService} from '../../../_Services/chambre.service';

@Component({
  selector: 'app-afficherchambre',
  templateUrl: './afficherchambre.component.html',
  styleUrls: ['./afficherchambre.component.css']
})
export class AfficherchambreComponent  implements OnInit{
  chambres: Chambre[] = [];


  constructor(private chambreService: ChambreService) {
  }
ngOnInit(){
  this.loadChambres();
}



  loadChambres() {
    this.chambreService.getAllChambres().subscribe({
      next:(data) => {
        this.chambres = data;
        console.log('Chambres chargées avec succès !', this.chambres);
      },
      error:(error) => {
        console.error('Erreur lors du chargement des chambres', error);
      }
    });}








}
