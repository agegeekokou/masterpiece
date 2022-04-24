import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageIntermediaireComponent } from './pages/page-intermediaire/page-intermediaire.component';
import { RouterModule } from '@angular/router';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageIntermediaireComponent,
    PageSignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
