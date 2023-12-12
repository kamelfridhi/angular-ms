import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-deleteetudiant',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponentetudiant implements OnInit{



  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('deleteetudian chargé !');
  }
  deleteetudiant(event: Event, id: number): void {
    event.preventDefault();
    this.chambreService.deleteEtudiant(id).subscribe({
      next: () => {
        console.log('etudiant deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting etudiant:', error);
      }
    });
  }
}
