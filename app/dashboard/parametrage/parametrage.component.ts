import { Component, OnInit } from '@angular/core';
import { PaysService, PagerService } from "../../_services/index";
import { Pays } from "../../_models/index";
import * as _ from 'underscore';
@Component({
    selector: 'parametrage-cmp',
    moduleId: module.id,
    templateUrl: 'parametrage.component.html'
})

export class ParametrageComponent implements OnInit{
  pays :Pays[];
idM:string;
paysM:Pays;
nomM:string;
model:any={};



    // pager object
    pager: any = {};

    // paged items
    pagedItems: Pays[];

  constructor(private  paysService:  PaysService,private  pagerService:  PagerService) { 
        
    }
  
   ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
    this.ListPays();
}



ListPays(){
     this.paysService.getAll().
    subscribe(pays => { 
        this.pays=pays;
           // initialize to page 1
        this.setPage(1);
        console.log(pays) ;
    },
    error =>{
        console.log(error);
    }
    
    );
}
supprimer(id:string){
    
console.log(id);
this.paysService.delete(id).subscribe(resultat=>{
this.ListPays();
});


}


modifier(){
    console.log(this.model.nom);
    this.paysM.nom=this.model.nom;
   this.paysService.update(this.paysM).subscribe(result=>{
   
   this.ListPays();
   
}) ;
}

getPays(pays:Pays){


this.paysM=pays;
this.nomM=this.paysM.nom;

}


setPage(page: number) {
      console.log()
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.pays.length, page);

        // get current page of items
        this.pagedItems = this.pays.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
