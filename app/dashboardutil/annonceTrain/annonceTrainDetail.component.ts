import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { AnnonceVolService } from "../../_services/annonceVol.service";
import { AnnonceTrainService } from "../../_services/annonceTrain.service";

@Component({
    selector: 'annonce-train-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceTrainDetail.component.html',
    providers:[AnnonceVolService]
})

export class AnnonceTrainDetailComponent implements OnInit {

    message: string;

    currentUserId: string;
    annonceTrain:any={};
    utilisateur:any={}
    id: number;
    private sub: any;

    constructor(private annonceVolService: AnnonceVolService, public route: ActivatedRoute,private userService: UserService, private annonceTrainService: AnnonceTrainService){
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
       console.log('dddddddd')
    });
  
    console.log('I am here '+this.id)
    this.annonceTrainService.getAnnonceTrainById(this.id.toString()).subscribe( annonceTrain=> { this.annonceTrain = annonceTrain,
        this.utilisateur=annonceTrain.utilisateur

    });

}

ngOnInit(): void {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
}

}
