import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ChambreService} from "../../../_Services/chambre.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-bloc',
  templateUrl: './delete-bloc.component.html',
  styleUrls: ['./delete-bloc.component.css']
})
export class DeleteBlocComponent implements OnInit{



  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private router:Router) { }

  ngOnInit() {
    console.log('Deletecompon chargé !');
  }
  deleteBloc(event: Event, id: number): void {
    event.preventDefault();
    this.chambreService.deleteBloc(id).subscribe({
      next: () => {
        console.log('Bloc deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting bloc:', error);
      }
    });
  }
}
