import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../../_Models/Etudiant";
import {FormBuilder, NgForm} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";
import {Foyer} from "../../../_Models/Foyer";

@Component({
  selector: 'app-ajouter-foyer',
  templateUrl: './ajouter-foyer.component.html',
  styleUrls: ['./ajouter-foyer.component.css']
})
export class AjouterFoyerComponent implements OnInit{


  foyer!:Foyer;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('AjouterfoyeComponent chargé !');
  }

  ajouterfoyer(ajoutForm : NgForm) {
    console.log(ajoutForm.valid);
    console.log(ajoutForm)
    if (ajoutForm.valid) {
      this.foyer =ajoutForm.value;
      console.log(this.foyer );
      // Appelle le service pour ajouter la chambre
      this.chambreService.addFoyer(this.foyer).subscribe({
        next:(response) => {
          console.log('foyer ajoutée avec succès !', response);
          this.router.navigate(['/afficherchambres'])
          // Ajoute ici des actions supplémentaires si nécessaire (par exemple, redirection)
        },
        error:(error) => {
          console.error('Erreur lors de l\'ajout de la etudiant', error);
        }
      });
    }}
}
