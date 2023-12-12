import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../_Models/chambre";
import {FormBuilder, NgForm} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";
import {Bloc} from "../../../_Models/Bloc";

@Component({
  selector: 'app-ajouter-bloc',
  templateUrl: './ajouter-bloc.component.html',
  styleUrls: ['./ajouter-bloc.component.css']
})
export class AjouterBlocComponent implements OnInit{


  Bloc!:Bloc;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('AjouterBlocComponent chargé !');
  }

  ajouterBloc(ajoutForm : NgForm) {
    console.log(ajoutForm.valid);
    console.log(ajoutForm)
    if (ajoutForm.valid) {
      this.Bloc =ajoutForm.value;
      console.log(this.Bloc );
      // Appelle le service pour ajouter la chambre
      this.chambreService.addBlocs(this.Bloc).subscribe({
        next:(response) => {
          console.log('Bloc ajoutée avec succès !', response);
          this.router.navigate(['/afficherchambres'])
          // Ajoute ici des actions supplémentaires si nécessaire (par exemple, redirection)
        },
        error:(error) => {
          console.error('Erreur lors de l\'ajout de la BLoc', error);
        }
      });
    }}
}
