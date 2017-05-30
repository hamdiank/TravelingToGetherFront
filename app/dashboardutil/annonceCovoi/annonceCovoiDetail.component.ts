import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ReservationService } from "../../_services/reservation.service";
import { AlertService } from "../../_services/alert.service";
import { UserService } from "../../_services/user.service";

@Component({
    selector: 'annonce-covoi-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoiDetail.component.html',
    styleUrls:['annonceCovoiDetail.component.css'],
    providers:[AnnonceCovoiService, ReservationService]
})

export class AnnonceCovoiDetailComponent implements OnInit {
    image: any;
    
    message: string;
    reserved: boolean;

    currentUserId: string;
    annonceCovoi:any={};
    utilisateur:any={}
    id: number;
    private sub: any;
    reservations:any=[];

    preferences: any={};
    voiture: any={};

    constructor(private annonceCovoiService: AnnonceCovoiService, private reservationService:ReservationService, public route: ActivatedRoute,  private alertService: AlertService,private userService: UserService){
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
       console.log('dddddddd')
    });
  
    console.log('I am here '+this.id)
    this.annonceCovoiService.getAnnonceCovoi(this.id).subscribe( annonceCovoi=> { this.annonceCovoi = annonceCovoi,
        this.utilisateur= annonceCovoi.utilisateur, this.reservations= annonceCovoi.reservations,
        this.preferences= this.utilisateur.preferences, this.voiture= this.utilisateur.voiture
       console.log("idutilisateur"+this.utilisateur.idUtilisateur)
        console.log("idutilisateur"+this.preferences.fumeur)
       // console.log(JSON.stringify(this.annonceCovoi))
     // console.log(JSON.stringify(this.utilisateur))
    });

}

/////////////////////////////////////

  showImage(filename: string) {
    this.userService.getImage(filename)
      .subscribe((file) => {
        this.image = file;
        console.log("imagee  " + this.image);
      });
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
    
    console.log(typeof(this.utilisateur.idUtilisateur))
    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    //console.log("mmmmmmmmmmmm"+this.utilisateur.id)
    //this.showImage(this.utilisateur.idUtilisateur);
         // console.log('my id'+this.currentUserId)
        }
////////////////////////////////////////////////////////////
}
