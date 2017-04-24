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
    annoncesCovoi: AnnonceCovoi[];
    id: string;
    constructor(private annonceCovoiService: AnnonceCovoiService , private router: Router){}



        ngOnInit() {
             let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)

        }
}
