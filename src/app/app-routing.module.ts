import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageIntermediaireComponent } from './pages/page-intermediaire/page-intermediaire.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageCreatePhysicianComponent } from './pages/page-create-physician/page-create-physician.component';
import { PageTestComponent } from './page-test/page-test.component';
import { PageListPhysiciansComponent } from './page-list-physicians/page-list-physicians.component';
import { PageUpdatePhysicianComponent } from './pages/page-update-physician/page-update-physician.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'page-intermediaire', component: PageIntermediaireComponent },
  { path: 'page-sign-up', component: PageSignUpComponent },
  { path: 'page-sign-in', component: PageSignInComponent },
  { path: 'page-profile', component: PageProfileComponent },
  { path: 'page-create-physician', component: PageCreatePhysicianComponent },
  { path: 'page-test', component: PageTestComponent },
  { path: 'page-list-physicians', component: PageListPhysiciansComponent },
  { path: 'page-update-physician/:id-physician', component: PageUpdatePhysicianComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
