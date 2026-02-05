import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConsulateComponent } from './pages/consulate/consulate.component';
import { ServicesComponent } from './pages/services/services.component';
import { MissionsComponent } from './pages/missions/missions.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Consulat du Sultanat d\'Oman - Accueil' },
  { path: 'consulat', component: ConsulateComponent, title: 'Le Consulat' },
  { path: 'services', component: ServicesComponent, title: 'Services consulaires' },
  { path: 'missions', component: MissionsComponent, title: 'Objectifs et missions' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
