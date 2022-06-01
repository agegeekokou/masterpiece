import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Physician } from 'src/app/models/physician';
import { PhysicianService } from 'src/app/services/physician.service';

@Component({
  selector: 'app-page-update-physician',
  templateUrl: './page-update-physician.component.html',
  styleUrls: ['./page-update-physician.component.css']
})
export class PageUpdatePhysicianComponent implements OnInit {
  updatePhysicianForm!: FormGroup;
  public specialtiesItems!: any;
  public items: any;
  public name: any;
  public physicianToUpdate!: Physician;
  public physician!: Physician;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private physicianService: PhysicianService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.physicianService.getPhysicianById(param['id-physician']).subscribe((respPhysician: Physician) => {
        console.log(respPhysician);
        this.updatePhysicianForm = this.fb.group({
          lastname: [respPhysician.lastname, Validators.required],
          firstname: [respPhysician.firstname, Validators.required],
          specialty: [respPhysician.specialty, Validators.required],
          address: [respPhysician.address, Validators.required],
          siret: [respPhysician.siret, Validators.required],
          id: [respPhysician.id]    
        })
      })
    })

    this.physicianService.getAllSpecialties().subscribe((response) => {
      console.log(response);
      this.specialtiesItems = response;
    })
  }

  

  onSubmitForm(){
    const physicianToUpdate = this.updatePhysicianForm.value;

    this.physicianService.updatePhysician(physicianToUpdate).subscribe((resp) => {
      //alert(resp.message);
      this.router.navigateByUrl('/page-list-physicians');
    })

  }

}
