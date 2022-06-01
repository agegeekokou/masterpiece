import { Component, OnInit } from '@angular/core';
import { Physician } from '../models/physician';
import { PhysicianService } from '../services/physician.service';

@Component({
  selector: 'app-page-list-physicians',
  templateUrl: './page-list-physicians.component.html',
  styleUrls: ['./page-list-physicians.component.css']
})
export class PageListPhysiciansComponent implements OnInit {
  public listPhysicians!: Physician[];
  public physicianId: any;

  constructor(private physicianService: PhysicianService) { }

  ngOnInit(): void {
    this.physicianService.getAllPhysicians().subscribe((resp) => {
      console.log(resp);
      this.listPhysicians = resp;
    })
  }
  onClickDeletePhysician(physicianId: string | undefined) {
    console.log(physicianId);
    if (physicianId) {
      this.physicianService.deletePhysician(physicianId).subscribe({
        next: (resp) => {
          console.log(resp);
          // Todo 
          // Rechercher dans le tableau this.listCountries l'objet country avec l'_id == countryId
          // et le supprimer pour que notre liste de pays n'affiche plus le pays supprimé
          this.listPhysicians = this.listPhysicians.filter(physician => physician.id !== physicianId);
          // Version détaillée
          // const newArrayFiltered = this.listCountries.filter(country => country._id !==  countryId);
          // this.listCountries = newArrayFiltered;

          // Version plus détaillée
          // const detailsNewArrayFiltered = this.listCountries.filter((country) => {
          //   if(country._id !==  countryId) {
          //     return country;
          //   } else return;
          // });
          // this.listCountries = detailsNewArrayFiltered;

        },
        error: (err) => { console.error(err) }
      })
    }
  }


}
