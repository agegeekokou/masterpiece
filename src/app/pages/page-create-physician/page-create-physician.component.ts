import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Physician } from 'src/app/models/physician';
import { PhysicianService } from 'src/app/services/physician.service';

@Component({
  selector: 'app-page-create-physician',
  templateUrl: './page-create-physician.component.html',
  styleUrls: ['./page-create-physician.component.css']
})
export class PageCreatePhysicianComponent implements OnInit {
  newPhysicianForm!: FormGroup;
  constructor(private fb: FormBuilder, private physicianService: PhysicianService, private router: Router) { }

  ngOnInit(): void {
    this.newPhysicianForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: [, Validators.required],
      specialite: [, Validators.required],
      adresse: ['', Validators.required],
      siret: ['', Validators.required]
    })
  }
  onSubmitForm() {
    console.log(this.newPhysicianForm.value);
    const newPhysician = new Physician(
      this.newPhysicianForm.value.lastname,
      this.newPhysicianForm.value.firstname,
      this.newPhysicianForm.value.specialite,
      this.newPhysicianForm.value.adresse,
      this.newPhysicianForm.value.siret
    );
      console.log(newPhysician);
      this.physicianService.createNewPhysician(newPhysician).subscribe(() => {
      console.log("Le médecin a été créé !!!");
      this.router.navigateByUrl('/page-profile');
    });
}

}
