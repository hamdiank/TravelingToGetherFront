import { Component, OnInit } from '@angular/core';
import { PaysService } from "../../_services/index";
import { Pays } from "../../_models/index";

@Component({
    selector: 'parametrage-cmp',
    moduleId: module.id,
    templateUrl: 'parametrage.component.html'
})

export class ParametrageComponent implements OnInit{
  pays :Pays[];
  constructor(private  paysService:  PaysService) { 
        
    }
  
   ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
    this.ListPays();
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
}
