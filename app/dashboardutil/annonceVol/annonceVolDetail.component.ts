import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { AnnonceVolService } from "../../_services/annonceVol.service";

@Component({
    selector: 'annonce-vol-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceVolDetail.component.html',
    providers:[AnnonceVolService]
})

export class AnnonceVolDetailComponent implements OnInit {

    message: string;

    currentUserId: string;
    annonceVol:any={};
    utilisateur:any={}
    id: number;
    private sub: any;

    constructor(private annonceVolService: AnnonceVolService, public route: ActivatedRoute,private userService: UserService){
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
       console.log('dddddddd')
    });
  
    console.log('I am here '+this.id)
    this.annonceVolService.getAnnonceVolById(this.id.toString()).subscribe( annonceVol=> { this.annonceVol = annonceVol,
        this.utilisateur=annonceVol.utilisateur

    });

}

ngOnInit(): void {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
}

}
