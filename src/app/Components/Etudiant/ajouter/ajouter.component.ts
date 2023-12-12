import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../_Models/chambre";
import {FormBuilder, NgForm} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";
import {Etudiant} from "../../../_Models/Etudiant";

@Component({
  selector: 'app-ajouteretudiant',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponentEtudiant implements OnInit{


  etudiant!:Etudiant;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('AjouteretudiantComponent chargé !');
  }

  ajouteretudiant(ajoutForm : NgForm) {
    console.log(ajoutForm.valid);
    console.log(ajoutForm)
    if (ajoutForm.valid) {
      this.etudiant =ajoutForm.value;
      console.log(this.etudiant );
      // Appelle le service pour ajouter la chambre
      this.chambreService.addEtudiant(this.etudiant).subscribe({
        next:(response) => {
          console.log('etudiant ajoutée avec succès !', response);
          this.router.navigate(['/afficherchambres'])
          // Ajoute ici des actions supplémentaires si nécessaire (par exemple, redirection)
        },
        error:(error) => {
          console.error('Erreur lors de l\'ajout de la etudiant', error);
        }
      });
    }}
}
