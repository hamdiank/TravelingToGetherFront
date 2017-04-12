import { Component, OnInit } from '@angular/core';
import { PaysService } from "../../_services/index";
import { Pays } from "../../_models/index";
import { AvionService } from "../../_services/avion.service";
import { Avion } from "../../_models/avion";

@Component({
    selector: 'parametrage-cmp',
    moduleId: module.id,
    templateUrl: 'parametrage.component.html'
})

export class ParametrageComponent implements OnInit{
  pays :Pays[];
  avions: Avion[];

  constructor(private  paysService:  PaysService, private avionService: AvionService) { 
        
    }
  
   ngOnInit(){
    this.ListPays();
    this.getAvions();
}
ListPays(){
     this.paysService.getAll().
    subscribe(pays => { 
        this.pays=pays;
        console.log(pays) ;
    },
    error =>{
        console.log(error);
    }
    
    );

}

getAvions(){
    this.avionService.getAvions().subscribe( avions=> { this.avions=avions;
    console.log("aaaaaaaaaaa");    
}
    );

}
//    console.log(this.avions);
//    console.log(typeof(this.avions));


delete(avion: Avion){
    console.log(typeof(avion.id));
    
    this.avionService.delete(avion.id);
    console.log(avion.type+"supprimé!!!!!!");


}
}





