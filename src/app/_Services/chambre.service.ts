import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Chambre} from "../_Models/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  apiUrl = "http://localhost:8094/api/Chambre";
  constructor(private http: HttpClient) { }

  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.apiUrl+'/GetAllChambre');
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.apiUrl +'/Addchambre', chambre);
  }





}
