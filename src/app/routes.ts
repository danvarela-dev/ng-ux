import { Routes } from '@angular/router';
import { ClaseDetailComponent } from './clases/clase-details/clase-details.component';
import { ClaseListComponent } from './clases/clase-list.component';
import { CreateClaseComponent } from './clases/create-clase.component';
import { DashboardComponent } from './ejercicio/dashboard.component';

export const AppRoutes: Routes = [
  { path: 'clases/new', component: CreateClaseComponent },
  { path: 'clases/:uxid', component: ClaseDetailComponent },
  { path: 'clases', component: ClaseListComponent },
  { path: '', redirectTo: '/clases', pathMatch: 'full' },
];
