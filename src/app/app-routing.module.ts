import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageIntermediaireComponent } from './pages/page-intermediaire/page-intermediaire.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'page-intermediaire', component: PageIntermediaireComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
