import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'annonce-covoi-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoiDetail.component.html',
    providers:[AnnonceCovoiService]
})

export class AnnonceCovoiDetailComponent implements OnInit{
    annonceCovoi: any={};

    constructor(private annonceCovoiService: AnnonceCovoiService, public route: ActivatedRoute){}
getAnnonceCovoi(){
     this.route.params
      .switchMap((params: Params) => this.annonceCovoiService.getAnnonceCovoi(+params['id']))
      .subscribe( annonceCovoi => { this.annonceCovoi = annonceCovoi});

}
    ngOnInit(){
        this.getAnnonceCovoi();
        console.log('ffffffffffffff')
        console.log(typeof(this.annonceCovoi))
        
    }
}