import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent implements OnInit {
  signInError = false; 
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitSignIn(form: NgForm) {
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    const requeteObservable = this.authService.logUser(username, password);

    requeteObservable.subscribe({
      // method à appeler en cas de succès
      next: (resp: any) => {
        console.log(resp.token);

        this.router.navigateByUrl('/page-list-physicians');
        // TODO stockage de mon token 
        localStorage.setItem("token", resp.token);
        this.authService.messager.next(true);
      },
      // method à appeler en cas d'erreur
      error: (err: any) => {
        // affichage message d'erreur coté page
        this.signInError = true;
        console.log(err);
      }
    })
  }

}
