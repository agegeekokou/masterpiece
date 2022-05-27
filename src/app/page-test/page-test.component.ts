import { Component, OnInit } from '@angular/core';
import { Physician } from '../models/physician';
import { PhysicianService } from '../services/physician.service';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})
export class PageTestComponent implements OnInit {
  public listPhysicians!: Physician[];
  constructor(private physicianService: PhysicianService) { }

  ngOnInit(): void {
    this.physicianService.getAllPhysicians().subscribe((resp) => {
      console.log(resp);
      this.listPhysicians = resp;
    })
  }

}
