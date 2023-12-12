import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Chambre} from "../_Models/chambre";
import {Bloc} from "../_Models/Bloc";
import {Foyer} from "../_Models/Foyer";
import {Etudiant} from "../_Models/Etudiant";
import {Reservation} from "../_Models/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  apibloc = "http://localhost:2020/bloc/";
  apifoyer = "http://localhost:2020/foyer/";
  apichamber = "http://localhost:2020/Chambre/";
  apireservation = "http://localhost:2020/Reservation/";
  apietudiant = "http://localhost:2020/foyer/";
  constructor(private http: HttpClient) { }
/***************Chambre********************/
  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.apichamber+'/GetAllChambre');
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.apichamber +'/Addchambre', chambre);
  }
  deleteChambre(id: number): Observable<Chambre> {
    return this.http.delete<Chambre>(`${this.apichamber}/deleteChambre/${id}`);
  }
  /***************Bloc********************/

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(this.apibloc+'/Allblocs');
  }

  addBlocs(B: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(this.apibloc +'/addblocs', B);
  }
  deleteBloc(id: number): Observable<Bloc> {
    return this.http.delete<Bloc>(`${this.apibloc}/deletebloc/${id}`);
  }
  /***************Foyer********************/

  deleteFoyer(id: number): Observable<Foyer> {
    return this.http.delete<Foyer>(`${this.apifoyer}/deletebloc/${id}`);
  }
  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(this.apifoyer+'/Allfoyer');
  }

  addFoyer(F: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(this.apifoyer +'/addfoyer', F);
  }
  /***************Etudiant********************/

  deleteEtudiant(id: number): Observable<Etudiant> {
    return this.http.delete<Etudiant>(`${this.apietudiant}/delete/${id}`);
  }
  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apietudiant+'/Alletudiant');
  }

  addEtudiant(E: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apietudiant +'/addfoyer', E);
  }
  /***************Reservation********************/

  deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(`${this.apireservation}/deleteReservation/${id}`);
  }
  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apireservation+'/ALLReservation');
  }

  addReservation(R: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apireservation +'/addReservation', R);
  }






}
