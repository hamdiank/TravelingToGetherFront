import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ReservationService } from "../../_services/reservation.service";
import { AlertService } from "../../_services/alert.service";

@Component({
    selector: 'annonce-covoi-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoiDetail.component.html',
    providers:[AnnonceCovoiService, ReservationService]
})

export class AnnonceCovoiDetailComponent implements OnInit {
    message: string;
    reserved: boolean;


    currentUserId: string;
    annonceCovoi:any={};
    utilisateur:any={}
    id: number;
    private sub: any;

    reservations:any=[];

    constructor(private annonceCovoiService: AnnonceCovoiService, private reservationService:ReservationService, public route: ActivatedRoute,  private alertService: AlertService){
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
       console.log('dddddddd')
    });

     
    console.log('I am here '+this.id)
    this.annonceCovoiService.getAnnonceCovoi(this.id).subscribe( annonceCovoi=> { this.annonceCovoi = annonceCovoi,
        this.utilisateur= annonceCovoi.utilisateur, this.reservations= annonceCovoi.reservations
       // console.log(this.utilisateur.idUtilisateur)
       // console.log(JSON.stringify(this.annonceCovoi))
     // console.log(JSON.stringify(this.utilisateur))
        
    
    });

    }

getAnnonceCovoi(){
  
       
}

////////////////////////////////////////////////
reserver(){
this.reservationService.reserver(this.annonceCovoi.id, this.currentUserId)
.subscribe(
                data => { 
                  if(data !== null){
                       console.log("jjjjj"+data)


                }else {
                    this.message = " Vous avez déjà réservé ";
                    console.log(this.message)
                    this.alertService.error(" Vous avez déjà réservé ");
                    this.reserved=false;
                    console.log(data)

                }
                });
  
}

 /*   ngOnInit() : void{
     
          

        this.route.params
      .switchMap((params: Params) => this.annonceCovoiService.getAnnonceCovoi(+params['id']))
      .subscribe( annonceCovoi => { this.annonceCovoi = annonceCovoi});
        this.getAnnonceCovoi();
        console.log(typeof(this.annonceCovoi))
        console.log(JSON.stringify(this.annonceCovoi));
        */
/////////////////////////////////////////////////////////

ngOnInit(): void {
    this.getAnnonceCovoi();
    console.log(this.utilisateur.id)
    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
         // console.log('my id'+this.currentUserId)
        }

////////////////////////////////////////////////////////////

}
