import { Component,Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./clase-details.component.html'
})

export class ClaseDetailComponent{
    
    constructor(private routes:ActivatedRoute){

    }

    ngOnInit(){
        alert(this.routes.snapshot.params["uxid"]);
    }
}