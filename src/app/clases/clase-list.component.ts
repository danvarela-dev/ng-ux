import { Component } from '@angular/core';
import { ClaseService } from '../shared/clase-service';
import { clase } from '../models/clase.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'clase-list',
  template: `
    <h1>Lista de Clases</h1>
    <hr />
    <div class="row">
      <div *ngFor="let clase of clasesList" class="col-md-4 col-4 col-lg-12">
        <clase-thumbnail [claseUx] = "clase" (evtClaseUx)="fnEventClaseUx($event)"></clase-thumbnail>
      </div>
    </div>
  `
})
export class ClaseListComponent {

  clasesList:clase[] | undefined;
  
constructor(private claseService: ClaseService){

}
ngOnInit(){
  //this.clasesList = this.claseService.getAllClasses();
  this.claseService.getClasses().subscribe(data => {
    this.clasesList = data;
  });
}


fnEventClaseUx(data:any){
  alert(data);
}

    
}
