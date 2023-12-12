import {Component, OnInit} from '@angular/core';
import {Foyer} from "../../../_Models/Foyer";
import {FormBuilder, NgForm} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";
import {Reservation} from "../../../_Models/Reservation";

@Component({
  selector: 'app-ajouterreservation',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponentreservation implements OnInit{


  reservation!:Reservation;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('ajouterreserva chargé !');
  }

  ajouterreservation(ajoutForm : NgForm) {
    console.log(ajoutForm.valid);
    console.log(ajoutForm)
    if (ajoutForm.valid) {
      this.reservation =ajoutForm.value;
      console.log(this.reservation );
      // Appelle le service pour ajouter la chambre
      this.chambreService.addReservation(this.reservation).subscribe({
        next:(response) => {
          console.log('reservation ajoutée avec succès !', response);
          this.router.navigate(['/afficherchambres'])
          // Ajoute ici des actions supplémentaires si nécessaire (par exemple, redirection)
        },
        error:(error) => {
          console.error('Erreur lors de l\'ajout de la resevation', error);
        }
      });
    }}
}
