import { Component, OnInit } from '@angular/core';

import { PaysService, PagerService } from "../../_services/index";
import { Pays } from "../../_models/index";
import * as _ from 'underscore';

import { AvionService } from "../../_services/avion.service";
import { Avion } from "../../_models/avion";
import { LoaderComponent } from "../../shared/loader/loader.component";
import{ValuesPipe}from "./valuesPipe"

@Component({
    selector: 'parametrage-cmp',
    moduleId: module.id,
    templateUrl: 'parametrage.component.html'
})

export class ParametrageComponent implements OnInit{
  loading: boolean =false;
  pays :Pays[];

idM:string;
paysM:Pays;
nomM:string;
model:any={};
model2:any={};
model3:any={};
model4:any={};
avions: Avion[];
returnArray = [];
avion:Avion;
    // pager object
    pager: any = {};

    // paged items
    pagedItems: Pays[];

  constructor(private  paysService:  PaysService,private  pagerService:  PagerService, private avionService: AvionService) { 
        
    }
  
   ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
     
     console.log("loading on");
     this.loading = true; 
   
    this.ListPays();
   
  //  this.ListAvions();
  
    // this.getville();
}

     //////////////////////////////////////////////////////////////////////////////////////////////

ListPays(){
     this.paysService.getAll().
    subscribe(pays => { 
       
         this.pays=pays;
           // initialize to page 1
         this.setPage(1);
         console.log(pays) ;

         this.loading = false;
         console.log("loading off");
        this.getville();
        
    },
    error =>{
        this.loading = false;
        console.log(error);
    }
    
    );
}

////////////////////////////////////////////////////////////////////////////////////////////////

addPays(){
    console.log(this.model2.nomPays);
    this.paysService.add(this.model2.nomPays).subscribe(result=>{
   
   this.ListPays();

    });
}

//////////////////////////////////////////////////////////////////////////////////////////

ajouterParametre(){
    if(this.model3.ville==null || this.model3.ville=="")
    console.log("ville null ");
    else this.paysM.cities.push(this.model3.ville);
    if(this.model3.aeroport==null || this.model3.aeroport=="")
    console.log("aeroport null ");
    else this.paysM.aeroports.push(this.model3.aeroport);
    
    if(this.model3.station==null || this.model3.station=="")
    console.log("aeroport null ");
    else this.paysM.stations.push(this.model3.stations);

    this.paysService.update(this.paysM).subscribe(result=>{
    this.ListPays();
    });

}

/////////////////////////////////////////////////////////////////////////////////////////

supprimer(id:string){
    
console.log(id);
this.paysService.delete(id).subscribe(resultat=>{
this.ListPays();
});


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

modifierPays(){
    console.log(this.model.nom);
    this.paysM.nom=this.model.nom;
   this.paysService.update(this.paysM).subscribe(result=>{
   
   this.ListPays();
   
}) ;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

getPays(pays:Pays){


this.paysM=pays;
this.nomM=this.paysM.nom;

}

////////////////////////////////////////////////////////////////

getville(){

this.pays.forEach(element => {
    
    for (var index = 0; index < element.cities.length; index++) {
         
        
    this.returnArray.push({
                key: element.nom,
                val: element.cities[index]
            });
}

});

 
//console.log("blabla +"+this.returnArray);

}

//////////////////////////////////////////////////////////////////////////////////////////////////////

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
  
/*---------------------------------------------------------------------------------*/ 
/*---------------------------------------------------------------------------------*/ 

ListAvions(){
    this.avionService.getAvions().subscribe( avions=> { 
        this.avions=avions;
    console.log("aaaaaaaaaaa");    
}
    );

}
//    console.log(this.avions);
//    console.log(typeof(this.avions));

modifierAvion(){

}
addAvion(){
this.avion.type=this.model4.typeAvion;
console.log(this.avion.type);
/*this.avionService.add(this.avion).subscribe(result=>{
this.ListAvions();
});*/
 
}

deleteAvion(avion: Avion){
   
    
    this.avionService.delete(avion.id).subscribe(result=>{
    this.ListAvions();
    });
    


}
}





