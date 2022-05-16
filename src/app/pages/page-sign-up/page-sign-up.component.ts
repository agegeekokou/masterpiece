import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css']
})
export class PageSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: ['', Validators.required]
    })
  }
  onSubmitForm() {
    console.log(this.signUpForm.value);
    //{"userName": "", "password": "", "confirmPassword": ""}
    const username = this.signUpForm.value.userName;
    const password = this.signUpForm.value.password;
    this.authService.registerUser(username, password).subscribe((reponseApi) => {
      console.log(reponseApi);
    })
  }

}
