import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClaseAppComponent } from './clase-app.component';
import { ClaseListComponent } from './clases/clase-list.component';
import { ClaseThumbnailComponent } from './clases/clase-thumbnail.component';
import { DashboardComponent } from './ejercicio/dashboard.component';
import { ColumnThumbnailComponent } from './ejercicio/column-thumbnail.component';
import {NavBarComponent} from './nav/clase-navbar.component'
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { ClaseDetailComponent } from './clases/clase-details/clase-details.component';
import { CreateClaseComponent } from './clases/create-clase.component';
import { ClaseService } from './shared/clase-service';

@NgModule({
  declarations: [
    ClaseAppComponent,
    ClaseListComponent,
    ClaseThumbnailComponent,
    DashboardComponent,
    ColumnThumbnailComponent,
    NavBarComponent,
    ClaseDetailComponent,
    CreateClaseComponent
  ],
  imports: [BrowserModule,RouterModule.forRoot(AppRoutes)],
  providers: [ClaseService],
  bootstrap: [ClaseAppComponent],
})
export class AppModule {}
