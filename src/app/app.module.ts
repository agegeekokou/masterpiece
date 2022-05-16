import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageIntermediaireComponent } from './pages/page-intermediaire/page-intermediaire.component';
import { RouterModule } from '@angular/router';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageCreatePhysicianComponent } from './pages/page-create-physician/page-create-physician.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageIntermediaireComponent,
    PageSignUpComponent,
    FooterComponent,
    PageSignInComponent,
    PageNotFoundComponent,
    PageProfileComponent,
    PageCreatePhysicianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
