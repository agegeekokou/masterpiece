import { Component, OnInit } from '@angular/core';
import { Physician } from 'src/app/models/physician';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PhysicianService } from 'src/app/services/physician.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  public listPhysicians !: any[];
  
  
  constructor(private physicianService: PhysicianService) {
    
   }

  ngOnInit(): void {
    fetch("http://localhost:8080/physicians")
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);
        this.listPhysicians = response;
      })
    // this.physicianService.getAllPhysicians().subscribe((resp) => {
    //   console.log(resp);
    //   this.listPhysicians = resp;
    // })
  }

}
