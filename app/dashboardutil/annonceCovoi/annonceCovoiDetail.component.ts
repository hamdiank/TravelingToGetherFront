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
    public  annonceCovoi:any={};
     id: number;
    private sub: any;

    constructor(private annonceCovoiService: AnnonceCovoiService, public route: ActivatedRoute){

    }
getAnnonceCovoi(){
    console.log('I am here '+this.id)
    this.annonceCovoiService.getAnnonceCovoi(this.id).subscribe( annonceCovoi=> { this.annonceCovoi = annonceCovoi
    
    });
       
}
    ngOnInit() : void{
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
       console.log('dddddddd')
      
       
       // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });

     
           this.getAnnonceCovoi();
            console.log(JSON.stringify(this.annonceCovoi))
       /* this.route.params
      .switchMap((params: Params) => this.annonceCovoiService.getAnnonceCovoi(+params['id']))
      .subscribe( annonceCovoi => { this.annonceCovoi = annonceCovoi});
        this.getAnnonceCovoi();
        console.log(typeof(this.annonceCovoi))
        console.log(JSON.stringify(this.annonceCovoi));*/
        
    }
}