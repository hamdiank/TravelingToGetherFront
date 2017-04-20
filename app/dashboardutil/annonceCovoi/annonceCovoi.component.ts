import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";

declare var $:any;

@Component({
    selector: 'annonce-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoi.component.html'
})

export class AnnonceCovoiComponent implements OnInit {
    annoncesCovoi: AnnonceCovoi[];

    id: String;
    constructor(private annonceCovoiService: AnnonceCovoiService){}
getAnnoncesCovoi(){
    this.annonceCovoiService.getAnnoncesCovoi().subscribe( annoncesCovoi=> { this.annoncesCovoi=annoncesCovoi
    
    });
    console.log("aaaaaaaaaaa"); 
  /*   console.log (localStorage.getItem('currentUser'));
              let currentUser = JSON.parse(localStorage.getItem('currentUser'));
              console.log(currentUser)
                this.id=currentUser;
             //   console.log(currentUser.json().idUtilisateur)   */
}

        ngOnInit() {
             console.log (localStorage.getItem('currentUser'));
             let currentUser = JSON.parse(localStorage.getItem('currentUser'));
              this.id=currentUser.idUtilisateur;
               console.log(currentUser.idUtilisateur)
            console.log("asx")
           this.getAnnoncesCovoi();
        }
}
