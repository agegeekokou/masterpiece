import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Physician } from '../models/physician';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  private urlApi: string

  constructor(private http: HttpClient) { 
    this.urlApi = "https://localhost:8080"
  }

  createNewPhysician(newPhysician: Physician) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/api/country`,
      newPhysician,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
