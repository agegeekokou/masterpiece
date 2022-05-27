import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Physician } from '../models/physician';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  private urlApi: string

  constructor(private http: HttpClient) { 
    this.urlApi = "http://localhost:8080"
  }
  getAllPhysicians(): Observable<Physician[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Physician[]>(`${this.urlApi}/physicians`,
      { headers: { Authorization: `Bearer ${token}` } })
  }

  getAllSpecialties(){
    const token = localStorage.getItem("token");
    return this.http.get(`${this.urlApi}/specialties`,
      { headers: { Authorization: `Bearer ${token}` } });

  }

  deletePhysician(physicianId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/physicians`,
      { headers: { Authorization: `Bearer ${token}` } })
  }


  createNewPhysician(newPhysician: Physician) {
    const token = localStorage.getItem("token");
    const body = {
      "firstname": newPhysician.firstname,
      "lastname": newPhysician.lastname,
      "specialtyId": +newPhysician.specialty,
      "address": newPhysician.address,
      "siret": newPhysician.siret.toString()
    }
    return this.http.post(
      `${this.urlApi}/physicians`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
  
}
