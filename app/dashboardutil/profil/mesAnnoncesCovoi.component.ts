import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { Router } from "@angular/router";

declare var $:any;

@Component({
    selector: 'mes-annonces-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'mesAnnoncesCovoi.component.html',
    providers:[AnnonceCovoiService]
})

export class MesAnnoncesCovoiComponent implements OnInit {
    model: any={};
    annoncesCovoi: AnnonceCovoi[];
    id: string;
    idUtilisateur: string;
    datePublication: string;
    public selected: any={};
    annonceCovoi: AnnonceCovoi;

    constructor(private annonceCovoiService: AnnonceCovoiService , private router: Router){}
getMesAnnoncesCovoi(){
    let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    this.id=currentUserId;
    console.log(this.id+"hhhhh")
    this.annonceCovoiService.getMesAnnoncesCovoi(this.id).subscribe( annoncesCovoi=> { this.annoncesCovoi=annoncesCovoi
    
    });
}

onClick(annonceCovoi: AnnonceCovoi){
    this.selected=annonceCovoi;
    this.model=this.selected
    console.log(this.model.id)
    console.log("jjjjjjjjjj")
    console.log(this.selected)

}
modifierAnnonceCovoi(){
    let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    this.idUtilisateur=currentUserId;
    this.datePublication="26/04/2017";
    this.annonceCovoiService.modifierAnnonceCovoi(this.datePublication, this.model.dateDepart, this.model.adresseDepart,
    this.model.adresseArrivee, this.model.nombrePlaces, this.model.cotisation, this.model.id, this.idUtilisateur)
     .subscribe(
                data => {
                    this.router.navigate(['dashboardutil/MesAnnoncesCovoi']);
                });
}
supprimerAnnonceCovoi(){
    this.annonceCovoiService.supprimerAnnonceCovoi(this.model.id)
    .subscribe(data => {
        this.router.navigate(['dashboardutil/MesAnnoncesCovoi'])
    });
    
    }


        ngOnInit() {
             let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)
               this.getMesAnnoncesCovoi();

        }
}
