import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-deletechambre',
  templateUrl: './deletechambre.component.html',
  styleUrls: ['./deletechambre.component.css']
})
export class DeletechambreComponent implements OnInit{



  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('Deletechamber chargé !');
  }
  deleteBloc(event: Event, id: number): void {
    event.preventDefault();
    this.chambreService.deleteChambre(id).subscribe({
      next: () => {
        console.log('chamber deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting bloc:', error);
      }
    });
  }
}
