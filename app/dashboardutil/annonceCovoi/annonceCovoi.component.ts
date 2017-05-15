import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { Router } from "@angular/router";

declare var $:any;

@Component({
    selector: 'annonce-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoi.component.html',
    providers:[AnnonceCovoiService]
})

export class AnnonceCovoiComponent implements OnInit {
    annoncesCovoi: AnnonceCovoi[];
     public model : any ={};

    id: string;
    datePublication: string;
    constructor(private annonceCovoiService: AnnonceCovoiService , private router: Router){}

    getAnnoncesCovoi(){
     this.annonceCovoiService.getAnnoncesCovoi().subscribe( annoncesCovoi=> { this.annoncesCovoi=annoncesCovoi
    
    });
    console.log("annoncesCovoi");

    
    let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id) 
  /*   console.log (localStorage.getItem('currentUser'));
              let currentUser = JSON.parse(localStorage.getItem('currentUser'));
              console.log(currentUser)
                this.id=currentUser;
             //   console.log(currentUser.json().idUtilisateur)   */
}
        ngOnInit() {
             let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)
            console.log("ngOnInit")
           this.getAnnoncesCovoi();
        }
}
