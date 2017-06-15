import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ReservationService } from "../../_services/reservation.service";
import { AlertService } from "../../_services/alert.service";
import { UserService } from "../../_services/user.service";

declare var google: any;

@Component({
    selector: 'annonce-covoi-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoiDetail.component.html',
    styleUrls:['annonceCovoiDetail.component.css'],
    providers:[AnnonceCovoiService, ReservationService]
})

export class AnnonceCovoiDetailComponent implements OnInit {


    paysDepart : string;
    villeDepart: string;

    paysArrivee : string;
    villeArrivee : string;
    

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
  
  }

/////////////////////////////////////

  showImage(filename: string) {
    this.userService.getImage(filename)
      .subscribe((file) => {
        this.image = file;
        console.log("imagee  " + this.image);
      });
  }
  showPath(villeDepart, villeArrivee){


var Depart= villeDepart;
var Arrivee= villeArrivee;

console.log('eeeeee'+Depart)
console.log('eeeeee'+Arrivee)





 var directionsService = new google.maps.DirectionsService;
       var directionsDisplay = new google.maps.DirectionsRenderer;
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsDisplay, Depart, Arrivee);

      function calculateAndDisplayRoute(directionsService, directionsDisplay, Depart, Arrivee) {

          var waypts = [];
        //  var stringDep:String; 


        directionsService.route({
          origin: Depart,
          destination: Arrivee,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
}
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

/////////////////////////////////////////////////////////

ngOnInit(): void {
    console.log('I am here '+this.id)
    this.annonceCovoiService.getAnnonceCovoi(this.id).subscribe( annonceCovoi=> { this.annonceCovoi = annonceCovoi,
        this.utilisateur= annonceCovoi.utilisateur, this.reservations= annonceCovoi.reservations,
        this.preferences= this.utilisateur.preferences, this.voiture= this.utilisateur.voiture,
        this.villeDepart=annonceCovoi.villeDepart, this.villeArrivee=annonceCovoi.villeArrivee,
        this.showPath(annonceCovoi.villeDepart, annonceCovoi.villeArrivee)
       
        console.log("idutilisateur"+this.utilisateur.idUtilisateur)
        console.log("idutilisateur"+this.preferences.fumeur)
        console.log("villeDepart"+ this.villeDepart)
        console.log("villeArrivee"+ this.villeArrivee)
    });


    
    console.log(typeof(this.utilisateur.idUtilisateur))
    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));

////////////////////////////////////////////////////////////

    }
}
